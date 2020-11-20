import { HttpModule, Module } from '@nestjs/common';
import AuthModule from 'src/auth/module';

import VacancyResolver from './resolver';
import VacancyService from './service';

@Module({
	imports: [HttpModule, AuthModule],
	providers: [VacancyService, VacancyResolver],
})
export default class VacancyModule {}
