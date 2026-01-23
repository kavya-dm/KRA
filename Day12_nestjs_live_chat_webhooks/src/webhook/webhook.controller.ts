import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { ChatGateway } from '../chat/chat.gateway';

/*
  Webhook Controller
  - One-way HTTP callbacks from external services
 */
@Controller('webhook')
export class WebhookController {
  constructor(
    private webhookService: WebhookService,
    private chatGateway: ChatGateway,
  ) {}

  @Post('notify')
  handleWebhook(
    @Body() payload: any,
    @Headers('x-signature') signature: string,
  ) {
    if (!payload || !signature) {
      throw new BadRequestException('Invalid webhook payload');
    }

    const isValid = this.webhookService.verifySignature(
      payload,
      signature,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid signature');
    }

    // Emit real-time notification to ALL WebSocket clients
    this.chatGateway.server.emit('notification', {
      text: `🔔 New ${payload.event} received!`,
      data: payload.data || {},
    });

    return { status: 'Webhook processed successfully' };
  }
}

// HTTP Controller for webhooks.


// Accepts POST /webhook/notify

// Validates signature

// Emits WebSocket notification

// This is the bridge - External HTTP → Internal WebSocket
