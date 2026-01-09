import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestId = Date.now().toString();
    (req as any).requestId = requestId;

    console.log(
      `[${requestId}] ${req.method} ${req.originalUrl}`,
    );

    next();
  }
}
