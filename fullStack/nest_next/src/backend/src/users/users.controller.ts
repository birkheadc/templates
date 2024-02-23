import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { BearerAuthenticatedRequest } from '../auth/request/bearerAuthenticatedRequest';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('change-password')
  @UseGuards(JwtGuard)
  async changePassword(@Request() request: BearerAuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    const user = request.user;
    await this.service.changePassword(user, dto.password);
  }

  @Post('new')
  async registerNewUser(@Body() request: RegisterUserRequestDto) {
    console.log('Received new register user request:', request.emailAddress);
  }

  @Get()
  @UseGuards(JwtGuard)
  async getUser(@Request() request: BearerAuthenticatedRequest) {
    const user = request.user;
    return user;
  }
}
