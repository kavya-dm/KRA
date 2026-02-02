import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Param,
  Headers,
  HttpCode,
  HttpStatus,
  UnauthorizedException
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // Simple auth check using Authorization header
  private checkAuth(auth?: string) {
    if (!auth) throw new UnauthorizedException('Missing Authorization token');
  }

  // Create a todo
  @Post()
  create(@Headers('authorization') auth: string, @Body() dto: CreateTodoDto) {
    this.checkAuth(auth);
    return this.todosService.create(dto);
  }

  // Get all todos
  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  // Get a single todo by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(Number(id));
  }

  // Update a todo
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todosService.update(Number(id), dto);
  }

  // Delete a todo
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.todosService.delete(Number(id));
  }
}
