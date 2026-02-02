import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

// Todos module that wires controller and service
@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
