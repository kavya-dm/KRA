import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Create NestJS application
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors();

  // Enable global validation for DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Swagger API documentation configuration
  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('API Contract for Todo Application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // Initialize Swagger documentation
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start server on port 3000
  await app.listen(3000);
}

bootstrap();
