import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  constructor() {
    console.log(' UsersService instantiated');
  }

  create(user: Omit<User, 'id'>): User {
    console.log(' UsersService.create() called');

    const newUser = { id: this.idCounter++, ...user };
    this.users.push(newUser);

    console.log(' User created:', newUser);
    return newUser;
  }

  findAll(): User[] {
    console.log(' UsersService.findAll() called');
    return this.users;
  }

  findOne(id: number): User {
    console.log(` UsersService.findOne() called with id=${id}`);

    const user = this.users.find((u) => u.id === id);
    if (!user) {
      console.log('User not found');
      throw new NotFoundException('User not found');
    }

    return user;
  }

  update(id: number, data: Partial<User>): User {
    console.log(`UsersService.update() called with id=${id}`);
    const user = this.findOne(id);
    Object.assign(user, data);
    console.log('User updated:', user);
    return user;
  }
}


// Service is created once (singleton)

// Controller delegates logic to service

// Business logic location is clear