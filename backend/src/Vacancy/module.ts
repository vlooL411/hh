import { Module, HttpModule } from '@nestjs/common';

import VacancyService from './service';
import VacancyResolver from './resolver';

@Module({
    imports: [HttpModule],
    providers: [
        VacancyService,
        VacancyResolver
    ],
    exports: [VacancyService],
})
export default class LaunchModule { }