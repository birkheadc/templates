import { BadRequestException, ConflictException, Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { UserOmitPassword } from '../auth/entities/userOmitPassword';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { MailService } from 'src/mail/mail.service';
import { VerifyEmailRequestDto } from './dtos/verify-email.dto';
import { CreateUserRequestDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository, private readonly mailService: MailService) { }

  async getUser(id: string): Promise<User> {
    return this.repository.getUserById(id);
  }

  async getUserByEmailAddress(emailAddress: string): Promise<User | null> {
    return this.repository.getUserByEmailAddress(emailAddress);
  }

  async changePassword(user: UserOmitPassword, newPassword: string): Promise<User> {
    const hash = hashSync(newPassword, 10);
    return await this.repository.putUser({ ...user, password: hash });
  }

  async registerNewUser(request: RegisterUserRequestDto): Promise<void> {
    const user = await this.getUserByEmailAddress(request.emailAddress);
    if (user != null) {
      await this.mailService.sendSomeoneTriedToUseYourAddressEmail(request.emailAddress, user.preferences.language);
      return;
    }
    await this.mailService.sendVerificationEmail(request);
  }

  async verifyUserEmailAddress(request: VerifyEmailRequestDto): Promise<string> {
    const emailAddress = await this.mailService.verifyCode(request.code);
    return emailAddress;
  }

  async createNewUser(request: CreateUserRequestDto): Promise<void> {
    const verifiedEmailAddress = await this.mailService.verifyCode(request.emailVerificationToken);
    if (verifiedEmailAddress !== request.emailAddress) {
      console.log('Error in createNewUser: token payload does not match request email address');
      throw new UnauthorizedException();
    };

    const preexistingUser = await this.getUserByEmailAddress(request.emailAddress);
    if (preexistingUser != null) {
      console.log('Error in createNewUser: email address is already in use. This should neven happen!');
      throw new UnauthorizedException();
    }

    throw new BadRequestException({ displayName: 'display name is not supported yet'});

    const user = User.fromCreateUserRequestDto(request);
    await this.repository.putUser(user);
  }
}