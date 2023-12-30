import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../payload/tokenPayload";
import { UserOmitPassword } from "../entities/userOmitPassword";
import { UsersService } from "../../users/users.service";
import { SecretsService } from "../../secrets/secrets.service";
import { AuthConfig } from "../auth.config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: AuthConfig, secretsService: SecretsService, private readonly usersService: UsersService) {
    const secret = secretsService.getSecret(config.secretName);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret
    });
  }

  async validate(payload: TokenPayload): Promise<UserOmitPassword> {
    const id = payload.sub;
    const user = await this.usersService.getUser(id);
    const { password, ...result } = user;
    return result;
  }
}