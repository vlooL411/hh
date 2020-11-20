import { Injectable } from '@nestjs/common';
import { User, UserSafe } from 'src/graphql';

@Injectable()
export default class UsersService {
	private readonly users: User[] = [
		{
			id: '1',
			username: 'admin',
			password: 'admin',
		},
		{
			id: '2',
			username: 'guest',
			password: 'guest',
		},
	];

	findOne = (username: string): User | undefined =>
		this.users.find(user => user.username === username);

	exist = (username: string): boolean => this.findOne(username) !== undefined;

	create(username: string, password: string): UserSafe | null {
		const isExist = this.exist(username);
		if (isExist) return null;

		const user: UserSafe = {
			id: (Math.random() * 10000).toFixed(0),
			username,
		};
		this.users.push({ ...user, password });
		return user;
	}

	getUsers = (): UserSafe[] => this.users.map(({ password, ...user }) => user);
}
