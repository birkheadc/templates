import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { GetTokenDto } from './dto/get-token.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Credentials } from './entities/credentials.entity';
import { hashSync } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository, private readonly jwtService: JwtService ) { }

  async getToken(dto: GetTokenDto): Promise<string> {
    if (dto.username === '' || dto.password === '') throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    let validCredentials = await this.getValidCredentials(dto);
    
    if (this.verifyPassword(dto.password, validCredentials.password)) {
      const payload = { sub: dto.username };
      const token = await this.jwtService.signAsync(payload);
      return token;
    }

    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  private async getValidCredentials(dto: GetTokenDto): Promise<Credentials> {
    let validCredentials = await this.repository.getUserCredentialsById(dto.username);
    if (validCredentials.password === '') validCredentials = await this.changePassword({ ...validCredentials, password: 'password' });
    return validCredentials;
  }

  verifyPassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }

  async changePassword(user: Credentials): Promise<Credentials> {
    const hash = hashSync(user.password, 10);
    return await this.repository.changePassword({ ...user, password: hash });
  }
}
