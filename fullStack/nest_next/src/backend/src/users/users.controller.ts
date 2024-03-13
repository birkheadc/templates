import { Body, Controller, Post, UseGuards, Request, Get, Put } from '@nestjs/common';
import { BearerAuthenticatedRequest } from '../auth/request/bearerAuthenticatedRequest';
import { ChangePasswordRequestDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';
import { RegisterUserRequestDto } from './dtos/register-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { VerifyEmailRequestDto } from './dtos/verify-email.dto';
import { CreateUserRequestDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UserOmitPassword } from '../auth/entities/userOmitPassword';
import { UpdatePreferencesRequestDto } from './dtos/update-preferences.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('/me/change-password')
  @UseGuards(JwtGuard)
  async changePassword(@Request() request: BearerAuthenticatedRequest, @Body() dto: ChangePasswordRequestDto) {
    const user = request.user;
    await this.service.changePassword(user, dto);
  }

  @Put('/me/preferences')
  @UseGuards(JwtGuard)
  async updatePreferences(@Request() request: BearerAuthenticatedRequest, @Body() dto: UpdatePreferencesRequestDto): Promise<void> {
    const user = request.user;
    await this.service.updatePreferences(user, dto);
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

  @Post()
  async createUser(@Body() request: CreateUserRequestDto) {
    await this.service.createNewUser(request);
  }

  @Get('/me')
  @UseGuards(JwtGuard)
  async getUser(@Request() request: BearerAuthenticatedRequest): Promise<UserOmitPassword> {
    const { password, ...user } = request.user;
    return user;
  }
}
