import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) { }

  async getUser(id: string): Promise<User> {
    return this.repository.getUserById(id);
  }

  async changePassword(user: User): Promise<User> {
    const hash = hashSync(user.password, 10);
    return await this.repository.putUser({ ...user, password: hash });
  }
}