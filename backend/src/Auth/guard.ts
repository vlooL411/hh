import { ExtractJwt } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import {
	ExecutionContext,
	Injectable,
	UnauthorizedException,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard as authGuard } from '@nestjs/passport';
import { Token, TokenType } from 'src/graphql';
import { GqlExecutionContext } from '@nestjs/graphql';

import AuthConfig from './config';

@Injectable()
class GqlGuard extends authGuard('jwt') {
	constructor(private readonly jwtService: JwtService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: AuthConfig().accessToken.secret,
		});
	}

	validate(token: Token) {
		try {
			return this.jwtService.verify(token);
		} catch {
			throw new UnauthorizedException();
		}
	}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context).getContext();

		const token = ctx?.headers[TokenType.authorization];
		const auth = this.validate(token);
		return auth;
	}
}

const AuthGuard = () => UseGuards(GqlGuard);

export default AuthGuard;
