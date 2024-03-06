import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: (errors: ValidationError[]) => {
      return new BadRequestException(
        errors.map((error) => ({
          field: error.property,
          message: error.constraints ? Object.keys(error.constraints)[0] : undefined
        }))
      )
    }
  }));
  app.enableCors();
  await app.listen(5000);
}
bootstrap();