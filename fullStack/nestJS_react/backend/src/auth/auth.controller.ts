import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post('login')
  @UseGuards(AuthGuard('basic'))
  async login(@Request() request: any): Promise<string> {
    const user = request.user;
    console.log('User:', user);
    return 'ok';
  }

  @Get()
  // @UseGuards(AuthGuard)
  async verifyToken() { }
}
