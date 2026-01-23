import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  health() {
    return { status: 'OK', message: 'Live Chat & Webhook Server Running' };
  }
}

// Health check endpoint
// A basic HTTP controller.