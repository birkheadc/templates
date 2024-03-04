import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { SESClient } from '@aws-sdk/client-ses';
import { ConfigService } from '@nestjs/config';
import { MailConfig } from './mail.config';
import { JwtModule } from '@nestjs/jwt';
import { SecretsModule } from '../secrets/secrets.module';
import { SecretsService } from '../secrets/secrets.service';

@Module({
  providers: [ MailService, {
    provide: SESClient,
    inject: [ ConfigService ],
    useFactory: (configService: ConfigService) => {
      const config = new MailConfig(configService);
      return new SESClient({ region: config.region })
    }
  } ],
  imports: [JwtModule.registerAsync({
    imports: [ SecretsModule ],
    inject: [ SecretsService, ConfigService ],
    useFactory: (secretsService: SecretsService, config: ConfigService) => {
      const mailConfig = new MailConfig(config);
      const secret = secretsService.getSecret(mailConfig.secretName);
      return {
        secret: secret,
        signOptions: { expiresIn: '1h' }
      }
    }
  })],
  exports: [ MailService ]
})
export class MailModule {}
