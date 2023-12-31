import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { UserOmitPassword } from '../auth/entities/userOmitPassword';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) { }

  async getUser(id: string): Promise<User> {
    return this.repository.getUserById(id);
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.repository.getUserByUsername(username);
  }

  async changePassword(user: UserOmitPassword, newPassword: string): Promise<User> {
    const hash = hashSync(newPassword, 10);
    return await this.repository.putUser({ ...user, password: hash });
  }
}