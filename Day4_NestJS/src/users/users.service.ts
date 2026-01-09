import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import type { User } from './interfaces/user.interface';


interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user: User = {
      id: Date.now().toString(),
      name: dto.name,
      email: dto.email,
    };

    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
