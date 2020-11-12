import { HttpService, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Vacancies, Vacancy } from 'src/graphql'

import { Model } from './model'

@Injectable()
export default class VacancyService {
    apiUrl = process.env.HH_API;

    constructor(private http: HttpService) { }

    private toVacancy(vacancy: Model.Vacancy): Vacancy {
        const { employer } = vacancy

        return {
            ...vacancy,
            employer: {
                ...employer,
                logo_urls: {
                    min: employer.logo_urls[90],
                    normal: employer.logo_urls[240],
                    original: employer.logo_urls.original
                }
            }
        };
    }

    getAllVacancies = (page: number): Observable<Vacancies> =>
        this.http.
            get(`${this.apiUrl}vacancies?page=${page}`).
            pipe(map(({ data }) => data))

    getVacancyById = (id: number): Observable<Vacancy> =>
        this.http.
            get(`${this.apiUrl}vacancies/${id}`).
            pipe(map(({ data }) => this.toVacancy(data)))
}