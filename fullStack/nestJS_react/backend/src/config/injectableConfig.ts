import { HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export abstract class InjectableConfig {
  constructor(configService: ConfigService, configName: string) {
    const config = configService.get(configName);
    if (config == null) throw new HttpException('Configuration Error', HttpStatus.INTERNAL_SERVER_ERROR);
    Object.assign(this, config);
  }
}