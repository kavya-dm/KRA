import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatModule } from './chat/chat.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    ChatModule,     // WebSocket chat
    WebhookModule   // Webhook handling
  ],
  controllers: [AppController],
})
export class AppModule {}
