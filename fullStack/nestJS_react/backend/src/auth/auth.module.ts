import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { HttpStrategy } from './strategies/http.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SecretsModule } from '../secrets/secrets.module';
import { SecretsService } from '../secrets/secrets.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthConfig, HttpStrategy, JwtStrategy],
  imports: [ SecretsModule, UsersModule, PassportModule, JwtModule.registerAsync({
    imports: [ SecretsModule ],
    inject: [ SecretsService, ConfigService ],
    useFactory: (secretsService: SecretsService, config: ConfigService) => {
      const authConfig = new AuthConfig(config);
      const secret = secretsService.getSecret(authConfig.secretName);
      return {
        secret: secret,
        signOptions: { expiresIn: '1h' }
      }
    }
  }) ]
})
export class AuthModule { }
