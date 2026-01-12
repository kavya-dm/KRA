import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Application bootstrap starting...');

  const app = await NestFactory.create(AppModule);

  console.log('AppModule initialized');

  app.setGlobalPrefix('api');

  await app.listen(3000);

  console.log('✅ Server running at http://localhost:3000/api');
}

bootstrap();

// Nest app creation starts here

// AppModule is the root entry point

// Server successfully starts