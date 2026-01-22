import { Injectable, LoggerService as NestLogger } from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLogger {
  log(message: string) {
    console.log(message);
  }

  error(message: string, trace?: string) {
    console.error(message, trace);
  }

  warn(message: string) {
    console.warn(message);
  }
}



// import {
//   Module,
//   Injectable,
//   Inject,
//   Optional,
//   Scope,
//   forwardRef,
// } from '@nestjs/common';
// import { COUNTER_TOKEN, CounterModule } from './counter/counter.module';

// @Injectable({ scope: Scope.REQUEST })//request - new instance for every request
// export class LoggerService {
//   constructor(
//     @Optional()
//     @Inject(COUNTER_TOKEN)
//     counter?: any,
//   ) {
//     console.log('[Circular] LoggerService resolved CounterService');
//   }
// }

// @Module({
//   imports: [forwardRef(() => CounterModule)],
//   providers: [LoggerService],
//   exports: [LoggerService],
// })
// export class LoggerModule {}


// @Optional() does TWO things:
// Prevents app crash 
// Allows undefined during bootstrap