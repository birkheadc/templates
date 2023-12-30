import { Controller, Post, Get, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { BearerAuthenticatedRequest } from './request/bearerAuthenticatedRequest';
import { BasicAuthenticatedRequest } from './request/basicAuthenticatedRequest';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post('login')
  @UseGuards(AuthGuard('basic'))
  async login(@Request() request: BasicAuthenticatedRequest): Promise<string> {
    const user = request.user;
    const token = await this.service.getToken(user);
    return token;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async verifyToken(@Request() request: BearerAuthenticatedRequest) {
    console.log('Token is good probably.');
  }
}
