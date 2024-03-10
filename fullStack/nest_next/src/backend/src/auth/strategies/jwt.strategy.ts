import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../payload/tokenPayload";
import { UsersService } from "../../users/users.service";
import { SecretsService } from "../../secrets/secrets.service";
import { AuthConfig } from "../auth.config";
import { User } from "../../users/entities/user.entity";

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

  async validate(payload: TokenPayload): Promise<User> {
    const id = payload.sub;
    const user = await this.usersService.getUser(id);
    return user;
  }
}