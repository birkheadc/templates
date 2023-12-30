import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersConfig } from './users.config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ConfigService } from '@nestjs/config';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  providers: [UsersService, UsersRepository, UsersConfig, {
    provide: DynamoDBClient,
    inject: [ ConfigService ],
    useFactory: (configService: ConfigService) => {
      const config = new UsersConfig(configService);
      return new DynamoDBClient({ region: config.region, endpoint: config.endpoint })
    }
  }],
  controllers: [UsersController],
  imports: [ forwardRef(() => AuthModule) ],
  exports: [ UsersService ]
})
export class UsersModule {}
