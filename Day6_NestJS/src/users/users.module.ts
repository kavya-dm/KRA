import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

console.log(' UsersModule file loaded');

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  constructor() {
    console.log(' UsersModule constructor executed');
  }
}
// Feature modules load after AppModule

// Controllers & services are registered here