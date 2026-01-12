import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LOG_ACTION_KEY, LogActionMetadata } from '../decorators/log-action.decorator';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {
    console.log(' LoggingInterceptor instance created');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(' Interceptor intercept() called');

    const startTime = Date.now();

    const request = context.switchToHttp().getRequest<any>();
    const { method, url } = request;

    console.log(` Incoming Request: ${method} ${url}`);

    const metadata = this.reflector.get<LogActionMetadata>(
      LOG_ACTION_KEY,
      context.getHandler(),
    );

    if (metadata) {
      console.log(` Metadata found → Action: ${metadata.action}, Version: ${metadata.version}`);
    } else {
      console.log(' No @LogAction metadata found for this route');
    }

    console.log(' Passing control to route handler...');

    return next.handle().pipe(
      tap((response) => {
        const executionTime = Date.now() - startTime;
        console.log(' Response received from handler');
        console.log(`Execution Time: ${executionTime}ms`);
        console.log(' Response Data:', response);
      }),
      catchError((error) => {
        console.log(' Error caught in interceptor');
        console.error(error.message);
        return throwError(() => error);
      }),
    );
  }
}

// Interceptor runs before controller

// next.handle() moves execution forward

// tap() runs after controller/service

// Interceptor surrounds the whole request lifecycle