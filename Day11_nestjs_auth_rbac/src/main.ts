import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation for DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Optional global API prefix
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();

// Global validation

// /api/* prefix

// Production-ready bootstrap