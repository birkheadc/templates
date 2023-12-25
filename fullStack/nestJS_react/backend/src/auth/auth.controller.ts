import { Controller, Post, Get, Headers, UseGuards, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetTokenDto } from './dto/get-token.dto';
import { AuthGuard } from './auth.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuthenticatedRequest } from './request/authenticatedRequest';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post()
  async getToken(@Headers('authorization') authorization: string): Promise<string> {
    const dto: GetTokenDto = GetTokenDto.fromBasicAuth(authorization);
    const jwt: string = await this.service.getToken(dto);
    return jwt;
  }

  @Post('change-password')
  @UseGuards(AuthGuard)
  async changePassword(@Request() request: AuthenticatedRequest, @Body() dto: ChangePasswordDto) {
    await this.service.changePassword({ id: request.user.sub, password: dto.password });
  }

  @Get()
  @UseGuards(AuthGuard)
  async verifyToken() { }
}
