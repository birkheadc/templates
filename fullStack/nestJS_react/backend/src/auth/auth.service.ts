import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetTokenDto } from './dto/get-token.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Credentials } from './entities/credentials.entity';
import { hashSync } from 'bcrypt';
import { TokenPayload } from './payload/tokenPayload';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService ) { }

  async getToken(dto: GetTokenDto): Promise<string> {
    if (dto.id === '' || dto.password === '') throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    let validCredentials = await this.getValidCredentials(dto);
    
    if (this.verifyPassword(dto.password, validCredentials.password)) {
      const payload: TokenPayload = { sub: dto.id };
      const token = await this.jwtService.signAsync(payload);
      return token;
    }

    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  private async getValidCredentials(dto: GetTokenDto): Promise<Credentials> {
    const user = await this.usersService.getUser(dto.id);
    return { id: user.id, password: user.password };
  }

  verifyPassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
