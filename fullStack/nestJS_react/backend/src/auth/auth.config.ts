import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "src/config/injectableConfig";

@Injectable()
export class AuthConfig extends InjectableConfig {
  region: string | undefined;
  endpoint: string | undefined;
  secretId: string | undefined;
  secretName: string | undefined;
  constructor(configService: ConfigService) {
    super(configService, 'auth');
  }
}