import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BasicStrategy } from "passport-http";
import { UserOmitPassword } from "../entities/userOmitPassword";

@Injectable()
export class HttpStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  
  async validate(username: string, password: string): Promise<UserOmitPassword> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}