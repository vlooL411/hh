import VacancyModule from 'src/Vacancy/module'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

const { ORIGIN } = process.env

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            definitions: { path: join(process.cwd(), 'src/graphql.ts') },
            context: ({ req }) => ({ headers: req.headers }),
            cors: {
                credentials: true,
                origin: ORIGIN,
            }
        }),
        VacancyModule
    ],
})

export default class AppModule { }