import { Injectable } from "@nestjs/common";
import { InjectableConfig } from "../config/injectableConfig";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SecretsConfig extends InjectableConfig {
  region: string | undefined;
  secretId: string | undefined;
  secretNames: (string | undefined)[];
  devSecretValue: string | undefined;
  constructor(configService: ConfigService) {
    super(configService, 'secrets');
  }
}