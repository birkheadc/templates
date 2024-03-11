import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { compareSync, hashSync } from 'bcrypt';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { MailService } from 'src/mail/mail.service';
import { VerifyEmailRequestDto } from './dtos/verify-email.dto';
import { CreateUserRequestDto } from './dtos/create-user.dto';
import { ChangePasswordRequestDto } from './dtos/change-password.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository, private readonly mailService: MailService) { }

  async getUser(id: string): Promise<User> {
    return this.repository.getUserById(id);
  }

  async getUserByEmailAddress(emailAddress: string): Promise<User | null> {
    return this.repository.getUserByEmailAddress(emailAddress);
  }

  async getUserByDisplayName(displayName: string): Promise<User | null> {
    return this.repository.getUserByDisplayName(displayName);
  }

  async changePassword(user: User, request: ChangePasswordRequestDto): Promise<User> {
    if (compareSync(request.password, user.password) === false) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    const hash = hashSync(request.newPassword, 10);
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
    const user = await this.getUserByEmailAddress(emailAddress);
    if (user != null) {
      throw new UnauthorizedException();
    }
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
      console.log('Error in createNewUser: email address is already in use');
      throw new UnauthorizedException();
    }

    if (await this.getUserByDisplayName(request.displayName) != null) {
      console.log('Error in createNewUser: display name is already in use');
      throw new ConflictException({ message: { field: 'displayName', message: 'unique' } });
    }
    
    const user = User.fromCreateUserRequestDto(request);
    await this.repository.putUser(user);
  }
}