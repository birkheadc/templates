import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "src/config/injectableConfig";

@Injectable()
export class AuthConfig extends InjectableConfig {
  region: string;
  secretId: string;
  secretName: string;
  constructor(configService: ConfigService) {
    super(configService, 'auth');
  }
}