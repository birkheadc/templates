import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SecretsModule } from './secrets/secrets.module';
import configuration from './config/configuration';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './mail/mail.module';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: '',
      port: 587,
      secure: false,
      
    }
  }), ConfigModule.forRoot({
    load: [ configuration ],
    envFilePath: ENV ? `./env/.env.${ENV}` : './env/.env',
    isGlobal: true
  }), AuthModule, UsersModule, SecretsModule, MailModule],
  controllers: [AppController],
  providers: [AppService]
})  
export class AppModule {}