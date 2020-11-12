import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { Vacancies, Vacancy } from 'src/graphql'

import VacancyService from './service'

@Resolver('Vacancy')
export default class VacancyResolver {
    constructor(private vacancyService: VacancyService) { }

    @Query()
    vacancy(@Args('id', ID) id: number): Observable<Vacancy> {
        return this.vacancyService.getVacancyById(id);
    }
    @Query()
    vacancies(@Args('page') page: number): Observable<Vacancies> {
        return this.vacancyService.getAllVacancies(page);
    }
}