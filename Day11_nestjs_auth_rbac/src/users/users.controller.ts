import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/dto/register.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  // AUTHENTICATED USERS
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // USER: own profile | ADMIN: all users
  @UseGuards(JwtAuthGuard)
  @Get('users')
  getUsers(@Request() req) {
    if (req.user.role === Role.ADMIN) {
      return this.usersService.findAll();
    }
    return this.usersService.findOne(req.user.sub);
  }

  // ADMIN ONLY
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('users')
  createUser() {
    return { message: 'Admin can create users' };
  }

  // ADMIN ONLY
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('admin/stats')
  getAdminStats() {
    return { users: 'confidential stats' };
  }
}


// JWT Guard → Authentication

// Roles Guard → Authorization