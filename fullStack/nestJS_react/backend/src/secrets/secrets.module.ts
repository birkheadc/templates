import { Module } from '@nestjs/common';
import { SecretsService } from './secrets.service';
import { SecretsConfig } from './secrets.config';

@Module({
  providers: [ SecretsConfig, {
    provide: SecretsService,
    inject: [ SecretsConfig ],
    useFactory: async (config: SecretsConfig) => {
      if (process.env.NODE_ENV === 'development') {
        return SecretsService.createDev(config);
      }
      const service = await SecretsService.createAsync(config);
      return service;
    }
  } ],
  exports: [ SecretsService ]
})
export class SecretsModule { }
