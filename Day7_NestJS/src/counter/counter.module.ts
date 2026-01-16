import { Module, forwardRef } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';
import { LoggerModule } from '../logger/logger.module';

export const COUNTER_TOKEN = 'COUNTER_TOKEN';

@Module({
  imports: [forwardRef(() => LoggerModule)],
  controllers: [CounterController],
  providers: [
    CounterService,
    { provide: COUNTER_TOKEN, useExisting: CounterService },
  ],
  exports: [COUNTER_TOKEN],
})
export class CounterModule {}



// Circular Dependencies - Understand circular dependency problems and solutions 

// Where it happens
// CounterModule imports LoggerModule
// LoggerModule imports CounterModule

// forwardRef -Don’t resolve this now, resolve it later.