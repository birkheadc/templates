import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BasicStrategy } from "passport-http";

@Injectable()
export class HttpStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    console.log('http strategy constructon...');
    super();
  }
  
  async validate(username: string, password: string): Promise<any> {
    console.log(`Validate ${username} : ${password}`);
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}