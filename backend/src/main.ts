import { NestFactory } from '@nestjs/core'

import AppModule from './App/module'

process.env.HH_API = 'https://api.hh.ru/'
process.env.ORIGIN = "http://localhost:3000"

const { ORIGIN } = process.env

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: ORIGIN,
        credentials: true,
    });

    await app.listen(4000);
}

export default bootstrap();