import { Authorization, Token } from 'src/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSafe } from 'src/graphql';

import AuthService from './service';

@Resolver('Auth')
export default class AuthResolver {
	constructor(private authService: AuthService) {}

	@Query()
	Login(
		@Args('username') username: string,
		@Args('password') password: string,
	): Authorization {
		return this.authService.login(username, password);
	}

	@Mutation()
	Register(
		@Args('username') username: string,
		@Args('password') password: string,
	): UserSafe {
		return this.authService.register(username, password);
	}

	@Query()
	Refresh(@Args('refreshToken') refreshToken: Token): Authorization {
		return this.authService.refresh(refreshToken);
	}
}
