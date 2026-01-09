import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggingMiddleware } from './common/middleware/logging.middleware';


@Module({
imports: [AuthModule, UsersModule],
})
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
consumer.apply(LoggingMiddleware).forRoutes('*');
}
}