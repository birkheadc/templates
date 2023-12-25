import { Controller, Post, Get, Headers, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetTokenDto } from './dto/get-token.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post()
  async getToken(@Headers('authorization') authorization: string): Promise<string> {
    const dto: GetTokenDto = GetTokenDto.fromBasicAuth(authorization);
    const jwt: string = await this.service.getToken(dto);
    return jwt;
  }

  @Post()
  @UseGuards(AuthGuard)
  async changePassword() {
    console.log('Able to change password but who is this?');
  }

  @Get()
  @UseGuards(AuthGuard)
  async verifyToken() { }
}
