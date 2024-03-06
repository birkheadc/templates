import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

let cachedServer: any;

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    nestApp.useGlobalPipes(new ValidationPipe({
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
    nestApp.enableCors();
    await nestApp.init();
    cachedServer = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });
  }
  return cachedServer(event, context);
}