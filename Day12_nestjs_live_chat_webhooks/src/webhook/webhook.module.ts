import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}

// Groups controller & service

// Imports ChatModule