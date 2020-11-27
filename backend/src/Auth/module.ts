import UsersModule from 'src/users/module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import AuthResolver from './resolver';
import AuthService from './service';
import AuthConfig from './config';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({ useFactory: () => AuthConfig().accessToken }),
		UsersModule,
	],
	providers: [AuthService, AuthResolver],
	exports: [JwtModule],
})
export default class AuthModule {}
