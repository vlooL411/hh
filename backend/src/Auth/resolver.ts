import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserSafe } from 'src/graphql';

import AuthService from './service';

@Resolver('Auth')
export default class AuthResolver {
	constructor(private authService: AuthService) {}

	@Query()
	login(
		@Args('username') username: string,
		@Args('password') password: string,
	): Promise<UserSafe> {
		return this.authService.validateUser(username, password);
	}
}
