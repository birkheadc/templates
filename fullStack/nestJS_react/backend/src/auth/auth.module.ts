import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { AuthConfig } from './auth.config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import helpers from '../shared/helpers';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AuthConfig, {
    provide: DynamoDBClient,
    useFactory: () => {
      return new DynamoDBClient({ region: 'ap-southeast-2' })
    }
  }],
  imports: [
    JwtModule.registerAsync({
      inject: [ ConfigService ],
      useFactory: async (configService: ConfigService) => {
        const config = new AuthConfig(configService);
        return {
          secret: await helpers.fetchSecretKey(config),
          global: true,
          signOptions: { expiresIn: '1h' }
        }
      }
    })
  ]
})
export class AuthModule {}
