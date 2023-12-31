import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { BearerAuthenticatedRequest } from '../auth/request/bearerAuthenticatedRequest';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('change-password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Request() request: BearerAuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    const user = request.user;
    await this.service.changePassword(user, dto.password);
  }
}
