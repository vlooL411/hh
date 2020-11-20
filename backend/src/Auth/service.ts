import UsersService from 'src/users/service';
import { Authorization, UserSafe } from 'src/graphql';
import { Injectable } from '@nestjs/common';
import { Token } from 'src/graphql';
import { JwtService } from '@nestjs/jwt';

import { config } from './config';

@Injectable()
export default class AuthService {
	constructor(
		private jwtService: JwtService,
		private usersService: UsersService,
	) {}

	validate(username: string, pass: string): UserSafe {
		const user = this.usersService.findOne(username);

		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}

		return null;
	}

	private createAuthorization(user: UserSafe): Authorization {
		if (!user) throw new Error('User data is empty');
		const accessToken = this.jwtService.sign(user);
		const refreshToken = this.jwtService.sign(user, config().refreshToken);

		return { accessToken, refreshToken };
	}

	login(username: string, pass: string): Authorization {
		const user = this.validate(username, pass);
		return this.createAuthorization(user);
	}

	register(username: string, password: string): UserSafe {
		const user = this.usersService.create(username, password);
		if (!user) throw new Error('User exist');
		return user;
	}

	refresh(refreshToken: Token): Authorization {
		try {
			const refresh = this.jwtService.verify(
				refreshToken,
				config().refreshToken,
			);

			const { iat, exp, ...user } = refresh;
			return this.createAuthorization(user);
		} catch {
			throw new Error(`Refresh token wrong`);
		}
	}
}
