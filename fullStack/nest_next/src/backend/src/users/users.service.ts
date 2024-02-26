import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { UserOmitPassword } from '../auth/entities/userOmitPassword';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { MailService } from 'src/mail/mail.service';

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
      await this.mailService.sendSomeoneTriedToUseYourAddressEmail(request.emailAddress);
      return;
    }
    // TODO: Create a temporary user with this email address
    await this.mailService.sendVerificationEmail(request);
  }
}