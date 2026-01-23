import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  //  Tell Nest we are using Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   // Allow browser clients
  app.enableCors();

  //  Now TypeScript knows useStaticAssets exists/ Serve static files (HTML client)

  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  await app.listen(3000);
  console.log('🚀 Server running on http://localhost:3000');
}
bootstrap();
