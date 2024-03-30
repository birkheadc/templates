import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotImplementedException, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { compareSync, hashSync } from 'bcrypt';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { MailService } from 'src/mail/mail.service';
import { VerifyEmailRequestDto } from './dtos/verify-email.dto';
import { CreateUserRequestDto } from './dtos/create-user.dto';
import { ChangePasswordRequestDto } from './dtos/change-password.dto';
import { UpdatePreferencesRequestDto } from './dtos/update-preferences.dto';
import { RequestResetPasswordLinkRequestDto } from './dtos/request-reset-password-link.dto';
import { VerifyResetPasswordCodeRequestDto } from './dtos/verify-reset-password-code.dto';
import { EmailAddress } from '../types/emailAddress/emailAddress';
import { ResetPasswordRequestDto } from './dtos/reset-password.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository, private readonly mailService: MailService) { }

  async getUser(id: string): Promise<User> {
    return this.repository.getUserById(id);
  }

  async getUserByEmailAddress(emailAddress: EmailAddress): Promise<User | null> {
    return this.repository.getUserByEmailAddress(emailAddress);
  }

  async getUserByDisplayName(displayName: string): Promise<User | null> {
    return this.repository.getUserByDisplayName(displayName);
  }

  async changePassword(user: User, request: ChangePasswordRequestDto): Promise<User> {
    if (compareSync(request.password, user.password) === false) throw new UnauthorizedException();
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

  async verifyUserEmailAddress(request: VerifyEmailRequestDto): Promise<EmailAddress> {
    const emailAddress = await this.mailService.verifyCode(request.code);
    const user = await this.getUserByEmailAddress(emailAddress);
    if (user != null) {
      throw new UnauthorizedException();
    }
    return emailAddress;
  }

  async verifyResetPasswordCode(request: VerifyResetPasswordCodeRequestDto): Promise<EmailAddress> {
    const emailAddress = await this.mailService.verifyCode(request.code);
    const user = await this.getUserByEmailAddress(emailAddress);
    console.log({ request, emailAddress, user });
    if (user == null) {
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

  async updatePreferences(user: User, request: UpdatePreferencesRequestDto): Promise<User> {
    return await this.repository.putUser({ ...user, preferences: request.preferences });
  }

  async requestResetPasswordLink(request: RequestResetPasswordLinkRequestDto): Promise<void> {
    const user = await this.getUserByEmailAddress(request.emailAddress);
    console.log({ user });
    if (user == null) {
      console.log('Warning in requestResetPasswordLink: requested user not found.', { request });
      return;
    }
    await this.mailService.sendPasswordResetEmail({ emailAddress: user.emailAddress, language: user.preferences.language, resetUrl: request.resetUrl });
  }

  async resetPassword(request: ResetPasswordRequestDto): Promise<void> {
    const verifiedEmailAddress = await this.mailService.verifyCode(request.resetToken);
    if (verifiedEmailAddress !== request.emailAddress) {
      console.log('Error in resetPassword: token payload does not match request email address', { request });
      throw new UnauthorizedException();
    }

    const user = await this.getUserByEmailAddress(request.emailAddress);
    if (user == null) {
      console.log('Error in resetPassword: user not found.', { request });
      throw new UnauthorizedException();
    }

    const hash = hashSync(request.password, 10);
    await this.repository.putUser({ ...user, password: hash });
  }
}