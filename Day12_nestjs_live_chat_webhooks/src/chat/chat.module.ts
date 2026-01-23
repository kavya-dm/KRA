import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway],
  exports: [ChatGateway] // needed by webhook module
})
export class ChatModule {}

// Module for chat functionality.

// Registers ChatGateway

// Exports it for other modules

// Allows Webhooks → WebSockets communication.