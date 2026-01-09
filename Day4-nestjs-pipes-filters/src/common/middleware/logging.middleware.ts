import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class LoggingMiddleware implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
(req as any).requestId = Date.now();
next();
}
}
//request preprocecing