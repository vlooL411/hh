import { HttpService, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map, first } from 'rxjs/operators'
import { Vacancy } from 'src/graphql'

import { Model } from './model'

@Injectable()
export default class VacancyService {
    apiUrl = process.env.HH_API;

    constructor(private http: HttpService) { }

    private toVacancy(vacancy: Model.Vacancy): Vacancy {
        const { id, name: position } = vacancy
        const { description, salary, address } = vacancy

        return {
            id,
            position,
            description,
            salary,
            address
        };
    }
    getAllVacancies = (): Observable<Vacancy[]> => {
        return this.http.
            get(`${this.apiUrl}vacancies`).
            pipe(map(({ data }) => data.items.map(this.toVacancy)))
    }

    getVacancyById = (id: number): Observable<Vacancy> => {
        const data = this.http.
            get(`${this.apiUrl}vacancies/${id}`).
            pipe(map(({ data }) => this.toVacancy(data)))

        return data
    }
}