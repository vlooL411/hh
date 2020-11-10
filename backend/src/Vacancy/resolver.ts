import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import VacancyService from './service';

@Resolver('Vacancy')
export default class VacancyResolver {
    constructor(private vacancyService: VacancyService) { }

    @Query()
    vacancy(@Args('id', ID) id: number) {
        return this.vacancyService.getVacancyById(id);
    }
    @Query()
    vacancies() {
        return this.vacancyService.getAllVacancies();
    }
}