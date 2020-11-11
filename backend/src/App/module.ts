import AuthModule from 'src/Auth/module'
import VacancyModule from 'src/Vacancy/module'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

const { ORIGIN: origin } = process.env

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            definitions: { path: join(process.cwd(), 'src/graphql.ts') },
            context: ({ req }) => ({ headers: req.headers }),
            cors: {
                credentials: true,
                origin
            }
        }),
        VacancyModule,
        AuthModule
    ]
})
export default class AppModule { }