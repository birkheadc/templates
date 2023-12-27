import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

const ENV = process.env.NODE_ENV;
console.log(`Environment: ${ENV}`);
@Module({
  imports: [ConfigModule.forRoot({
    load: [ configuration ],
    envFilePath: ENV ? `./env/.env.${ENV}` : './env/.env',
    isGlobal: true
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
