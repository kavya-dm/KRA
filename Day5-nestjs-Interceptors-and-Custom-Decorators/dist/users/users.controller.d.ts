import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: {
        name: string;
        email: string;
    }): import("./users.service").User;
    findAll(): import("./users.service").User[];
    findOne(id: string): import("./users.service").User;
    update(id: string, body: {
        name?: string;
        email?: string;
    }): import("./users.service").User;
}
