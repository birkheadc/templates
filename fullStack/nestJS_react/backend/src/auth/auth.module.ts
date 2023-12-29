import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import helpers from '../shared/helpers';
import { UsersModule } from '../users/users.module';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthConfig, ],
  imports: [ UsersModule, JwtModule.registerAsync({
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
  ],
  exports: [ JwtModule ]
})
export class AuthModule {}
