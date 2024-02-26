import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { SESClient } from '@aws-sdk/client-ses';
import { ConfigService } from '@nestjs/config';
import { MailConfig } from './mail.config';

@Module({
  providers: [ MailService, {
    provide: SESClient,
    inject: [ ConfigService ],
    useFactory: (configService: ConfigService) => {
      const config = new MailConfig(configService);
      return new SESClient({ region: config.region })
    }
  } ],
  imports: [],
  exports: [ MailService ]
})
export class MailModule {}
