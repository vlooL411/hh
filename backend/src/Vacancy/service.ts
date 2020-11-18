import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterVacancy, Vacancies, Vacancy } from 'src/graphql';

import { Model } from './model';

@Injectable()
export default class VacancyService {
	apiUrl = process.env.HH_API;

	constructor(private http: HttpService) {}

	private toVacancy(vacancy: Model.Vacancy): Vacancy {
		const employer = vacancy?.employer;
		const logo_urls = employer?.logo_urls;

		return {
			...vacancy,
			employer: {
				...employer,
				logo_urls: {
					min: logo_urls[90],
					normal: logo_urls[240],
					original: logo_urls.original,
				},
			},
		};
	}

	getAllVacancies(page: number, input: FilterVacancy): Observable<Vacancies> {
		let GET: string = `?page=${page ?? 0}`;
		const from = input?.from;
		if (from) GET += `&salary=${+from <= 0 ? 1 : from}`;
		if (input?.city || input?.name)
			GET += `&text=${input?.city ?? ''}+${input?.name ?? ''}`;

		return this.http
			.get(`${this.apiUrl}vacancies${encodeURI(GET)}`)
			.pipe(map(({ data }) => data));
	}

	getVacancyById = (id: number): Observable<Vacancy> =>
		this.http
			.get(`${this.apiUrl}vacancies\\${id}`)
			.pipe(map(({ data }) => this.toVacancy(data)));
}
