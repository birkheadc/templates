import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";

let cachedServer: any;

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    nestApp.enableCors();
    await nestApp.init();
    cachedServer = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });
  }
  return cachedServer(event, context);
}