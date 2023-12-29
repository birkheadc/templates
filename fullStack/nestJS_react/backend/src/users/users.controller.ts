import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { AuthenticatedRequest } from '../auth/request/authenticatedRequest';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('change-password')
  @UseGuards(AuthGuard)
  async changePassword(@Request() request: AuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    await this.service.changePassword({ id: request.user.sub, password: dto.password });
  }
}
