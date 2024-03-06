import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "../config/injectableConfig";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersConfig extends InjectableConfig {
  region: string | undefined;
  endpoint: string | undefined;
  validation: {
    password: {
      minLength: number,
      maxLength: number
    },
    displayName: {
      minLength: number,
      maxLength: number,
      matches: RegExp
    }
  }
  constructor(configService: ConfigService) {
    super(configService, 'users');
  }
}