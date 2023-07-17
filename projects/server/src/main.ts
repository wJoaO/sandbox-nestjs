import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { JOBS_QUEUE_MICROSERVICE_CONSUMER } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(JOBS_QUEUE_MICROSERVICE_CONSUMER);

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
