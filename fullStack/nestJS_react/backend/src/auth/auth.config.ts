import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "src/config/injectableConfig";

@Injectable()
export class AuthConfig extends InjectableConfig {
  secretName: string | undefined;
  constructor(configService: ConfigService) {
    super(configService, 'auth');
  }
}