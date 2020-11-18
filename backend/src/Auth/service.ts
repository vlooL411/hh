import UsersService from 'src/users/service';
import { UserSafe } from 'src/graphql';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class AuthService {
	constructor(private usersService: UsersService) {}

	async validateUser(username: string, pass: string): Promise<UserSafe> {
		const user = await this.usersService.findOne(username);

		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}

		return null;
	}
}
