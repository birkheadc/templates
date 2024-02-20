import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserOmitPassword } from './entities/userOmitPassword';
import { TokenPayload } from './payload/tokenPayload';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService ) { }

  async validateUser(emailAddress: string, password: string): Promise<UserOmitPassword> {
    const user = await this.usersService.getUserByEmailAddress(emailAddress);
    if (compareSync(password, user.password) === false) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    const { password: _, ...result } = user;
    return result;
  }

  async getToken(user: UserOmitPassword): Promise<string> {
    const payload: TokenPayload = { sub: user.id };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}