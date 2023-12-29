import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "../config/injectableConfig";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersConfig extends InjectableConfig {
  region: string | undefined;
  endpoint: string | undefined;
  constructor(configService: ConfigService) {
    super(configService, 'users');
  }
}