import { Injectable } from "@nestjs/common";
import { InjectableConfig } from "src/config/injectableConfig";

@Injectable()
export class MailConfig extends InjectableConfig {
  
}