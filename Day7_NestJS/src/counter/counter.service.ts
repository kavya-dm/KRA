import {
  Injectable,
  Scope,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

let globalCount = 0;

@Injectable({ scope: Scope.REQUEST }) 
export class CounterService // new instance for every HTTP request
  implements OnModuleInit, OnApplicationShutdown
{
  private readonly id = Math.random().toString(36).slice(2, 7); // Every request prints a new ID (new instance)

  onModuleInit() { //runs when provider is created
    console.log(`[Lifecycle][${this.id}] CounterService Init`);
  }

  onApplicationShutdown() { //runs when app stops (Ctrl + C)
    console.log(`[Lifecycle][${this.id}] CounterService Shutdown`);
  }

  get() {
    return { count: globalCount, instance: this.id };
  }

  inc() {
    globalCount++;
    return this.get();
  }
}

// whenever the instance is created - it will call the constructer and then it will increment the  globalCount++