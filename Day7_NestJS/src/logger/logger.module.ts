import { Module, forwardRef } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { CounterModule } from '../counter/counter.module';

@Module({
  imports: [forwardRef(() => CounterModule)], // 🔁 circular dep
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
