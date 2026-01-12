import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { LogAction } from '../decorators/log-action.decorator';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log('🎮 UsersController instantiated');
  }

  @Post()
  @LogAction('Create User', 'v1')
  create(@Body() body: { name: string; email: string }) {
    console.log(' Controller: POST /users');
    return this.usersService.create(body);
  }

  @Get()
  @LogAction('List Users', 'v1')
  findAll() {
    console.log(' Controller: GET /users');
    return this.usersService.findAll();
  }

  @Get(':id')
  @LogAction('Get User By ID', 'v1')
  findOne(@Param('id') id: string) {
    console.log(` Controller: GET /users/${id}`);
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  @UseInterceptors(LoggingInterceptor)
  @LogAction('Update User', 'v1')
  update(
    @Param('id') id: string,
    @Body() body: { name?: string; email?: string },
  ) {
    console.log(`Controller: PUT /users/${id}`);
    return this.usersService.update(Number(id), body);
  }
}

// Controller is hit after interceptor starts

// Controller delegates work to service

// Route-level interceptor works independently