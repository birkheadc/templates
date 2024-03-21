import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BasicStrategy } from "passport-http";
import { UserOmitPassword } from "../entities/userOmitPassword";
import { EmailAddress } from "../../types/emailAddress/emailAddress";

@Injectable()
export class HttpStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  
  async validate(emailAddress: EmailAddress, password: string): Promise<UserOmitPassword> {
    const user = await this.authService.validateUser(emailAddress, password);
    if (!user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}