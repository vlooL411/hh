import {
	createParamDecorator,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common';
import { Token, TokenType, UserSafe } from 'src/graphql';
import { verify } from 'jsonwebtoken';
import { GqlExecutionContext } from '@nestjs/graphql';

import { config } from './config';

const validate = (token: Token): UserSafe => {
	try {
		return verify(token, config().accessToken.secret) as object;
	} catch {
		throw new UnauthorizedException();
	}
};

export const CurrentUser = createParamDecorator(
	(_, context: ExecutionContext): UserSafe => {
		const ctx = GqlExecutionContext.create(context).getContext();

		const token = ctx?.headers[TokenType.authorization];
		return validate(token);
	},
);
