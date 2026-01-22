import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto, Role } from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      username: 'admin',
      password: bcrypt.hashSync('admin123', 10),
      role: Role.ADMIN,
    },
  ];

  findByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  findAll() {
    return this.users.map(({ password, ...u }) => u);
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }

  async create(dto: RegisterDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = {
      id: this.users.length + 1,
      username: dto.username,
      password: hashed,
      role: dto.role ?? Role.USER,
    };
    this.users.push(user);
    return user;
  }
}


// In-Memory Store
// Admin user exists by default

// Passwords are hashed

// No DB → focus on auth logic