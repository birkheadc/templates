import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthenticatedRequest } from '../auth/request/authenticatedRequest';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {

  constructor(private readonly service: UsersService) { }

  @Post('change-password')
  async changePassword(@Request() request: AuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    const user = new User();
    await this.service.changePassword(user, dto.password);
  }
}
