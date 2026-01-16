import {
  Injectable,
  Inject,
  Optional,
  Scope,
} from '@nestjs/common';
import { COUNTER_TOKEN } from '../counter/counter.module';

@Injectable({ scope: Scope.REQUEST })
export class LoggerService {
  constructor(
    @Optional()
    @Inject(COUNTER_TOKEN)
    counter?: any,
  ) {
    console.log('[Circular] LoggerService resolved CounterService');
  }
}
