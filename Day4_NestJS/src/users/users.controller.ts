import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import type { User } from './interfaces/user.interface';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto): User {
    return this.usersService.create(dto);
  }

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.usersService.findOne(id);
  }
}
