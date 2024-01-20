import { Controller, Post, Get, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BearerAuthenticatedRequest } from './request/bearerAuthenticatedRequest';
import { BasicAuthenticatedRequest } from './request/basicAuthenticatedRequest';
import { JwtGuard } from './guards/jwt.guard';
import { BasicGuard } from './guards/basic.guard';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post('login')
  @UseGuards(BasicGuard)
  async login(@Request() request: BasicAuthenticatedRequest): Promise<string> {
    const user = request.user;
    const token = await this.service.getToken(user);
    return token;
  }

  @Get()
  @UseGuards(JwtGuard)
  async verifyToken() { }
}
