import { NestFactory } from '@nestjs/core';

import AppModule from './App/module';

const { ORIGIN: origin } = process.env;

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin,
		credentials: true,
	});

	await app.listen(4000);
};

export default bootstrap();
