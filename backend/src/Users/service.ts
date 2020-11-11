import { Injectable } from '@nestjs/common'
import { User } from 'src/graphql'

@Injectable()
export default class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: '1',
                username: 'admin',
                password: 'admin',
            },
            {
                userId: '2',
                username: 'guest',
                password: 'guest',
            }
        ];
    }

    findOne = async (username: string): Promise<User | undefined> =>
        this.users.find(user => user.username === username)
}
