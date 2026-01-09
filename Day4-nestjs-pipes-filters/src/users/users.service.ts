import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
private users = [] as any[];


create(user) {
const newUser = { id: this.users.length + 1, ...user };
this.users.push(newUser);
return newUser;
}


findAll(active?: boolean) {
return this.users;
}


findOne(id: number) {
const user = this.users.find(u => u.id === id);
if (!user) throw new NotFoundException('User not found');
return user;
}
}