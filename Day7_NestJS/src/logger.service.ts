import {
  Module,
  Injectable,
  Inject,
  Optional,
  Scope,
  forwardRef,
} from '@nestjs/common';
import { COUNTER_TOKEN, CounterModule } from './counter/counter.module';

@Injectable({ scope: Scope.REQUEST }) //  REQUEST scoped
export class LoggerService {
  constructor(
    @Optional() // optional
    @Inject(COUNTER_TOKEN)
    counter?: any,
  ) {
    console.log('[Circular] LoggerService resolved CounterService');
  }
}

@Module({
  imports: [forwardRef(() => CounterModule)],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}


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