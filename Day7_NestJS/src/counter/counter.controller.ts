import {
  Controller,
  Get,
  Post,
  UseGuards,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { CounterService } from './counter.service';

class CounterGuard implements CanActivate {
  canActivate(ctx: ExecutionContext) {
    console.log('[ExecutionContext]', ctx.getType());
    const req = ctx.switchToHttp().getRequest();
    console.log('[ExecutionContext] IP:', req.ip);
    return true;
  }
}

@Controller('counter')
@UseGuards(CounterGuard)
export class CounterController {
  constructor(private readonly counter: CounterService) {}

  @Get()
  get() {
    return this.counter.get();
  }

  @Post('inc')
  inc() {
    return this.counter.inc();
  }
}
// ExecutionContext - What kind of request is this? HTTP? WebSocket? GraphQL?