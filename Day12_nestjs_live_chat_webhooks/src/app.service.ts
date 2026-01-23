import { Injectable } from '@nestjs/common';

@Injectable()// One instance shared across the application.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
