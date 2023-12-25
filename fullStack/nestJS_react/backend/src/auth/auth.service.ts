import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { GetTokenDto } from './dto/get-token.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository, private readonly jwtService: JwtService ) { }

  async getToken(dto: GetTokenDto): Promise<string> {
    const goodCredentials = await this.repository.getUserCredentialsById(dto.username);
    
    if (this.verifyPassword(dto.password, goodCredentials.password)) {
      const payload = { sub: dto.username };
      const token = await this.jwtService.signAsync(payload);
      return token;
    }
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  verifyPassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
