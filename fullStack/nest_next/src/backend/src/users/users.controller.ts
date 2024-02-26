import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { BearerAuthenticatedRequest } from '../auth/request/bearerAuthenticatedRequest';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { VerifyEmailRequestDto } from './dtos/verify-email.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('/me/change-password')
  @UseGuards(JwtGuard)
  async changePassword(@Request() request: BearerAuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    const user = request.user;
    await this.service.changePassword(user, dto.password);
  }

  @Post('register')
  async registerNewUser(@Body() request: RegisterUserRequestDto) {
    await this.service.registerNewUser(request);
  }

  @Post('verify')
  async verifyUserEmailAddress(@Body() request: VerifyEmailRequestDto): Promise<string> {
    const emailAddress = await this.service.verifyUserEmailAddress(request);
    return emailAddress;
  }

  @Get('/me')
  @UseGuards(JwtGuard)
  async getUser(@Request() request: BearerAuthenticatedRequest) {
    const user = request.user;
    return user;
  }
}
