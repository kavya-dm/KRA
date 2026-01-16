import { Module } from '@nestjs/common';
import { CounterModule } from './counter/counter.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [CounterModule, LoggerModule],
})
export class AppModule {}
