import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService ) { }

  async validateUser(username: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.getUserByUsername(username);
    if (compareSync(password, user.password) === false) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    const { password: _, ...result } = user;
    return result;
  }

  // async getToken(dto: GetTokenDto): Promise<string> {
  //   if (dto.username === '' || dto.password === '') throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

  //   let validCredentials = await this.getValidCredentials(dto);
    
  //   if (this.verifyPassword(dto.password, validCredentials.password)) {
  //     const payload: TokenPayload = { sub: dto.username };
  //     const token = await this.jwtService.signAsync(payload);
  //     return token;
  //   }

  //   throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  // }
}
