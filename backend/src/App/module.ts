import AuthModule from 'src/auth/module';
import VacancyModule from 'src/vacancy/module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] }),
		GraphQLModule.forRoot({
			typePaths: ['./**/*.graphql'],
			definitions: { path: join(process.cwd(), 'src/graphql.ts') },
			context: ({ req }) => ({ headers: req?.headers }),
			playground: {
				settings: {
					'request.credentials': 'include',
				},
			},
			cors: {
				credentials: true,
				origin: process.env.ORIGIN,
			},
		}),
		AuthModule,
		VacancyModule,
	],
})
export default class AppModule {}
