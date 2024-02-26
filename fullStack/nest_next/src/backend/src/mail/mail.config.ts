import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectableConfig } from "src/config/injectableConfig";

@Injectable()
export class MailConfig extends InjectableConfig {

  region: string | undefined;

  constructor(configService: ConfigService) {
    super(configService, 'mail')
  }
}