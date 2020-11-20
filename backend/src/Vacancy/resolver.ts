import AuthGuard from 'src/auth/guard';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { FilterVacancy, Vacancies, Vacancy } from 'src/graphql';

import VacancyService from './service';

@Resolver('Vacancy')
export default class VacancyResolver {
	constructor(private vacancyService: VacancyService) {}

	@Query()
	@AuthGuard()
	vacancy(@Args('id', ID) id: number): Observable<Vacancy> {
		return this.vacancyService.getVacancyById(id);
	}

	@Query()
	@AuthGuard()
	vacancies(
		@Args('page') page: number,
		@Args('input') input: FilterVacancy,
	): Observable<Vacancies> {
		return this.vacancyService.getAllVacancies(page, input);
	}
}
