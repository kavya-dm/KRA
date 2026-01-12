export interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UsersService {
    private users;
    private idCounter;
    constructor();
    create(user: Omit<User, 'id'>): User;
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, data: Partial<User>): User;
}
