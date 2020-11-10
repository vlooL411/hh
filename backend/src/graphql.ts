
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Salary {
    to?: string;
    from?: string;
    currency?: string;
    gross?: boolean;
}

export interface MetroStation {
    station_name?: string;
    line_name?: string;
    station_id?: string;
    line_id?: string;
    lat?: number;
    lng?: number;
}

export interface Address {
    city?: string;
    street?: string;
    building?: string;
    description?: string;
    lat?: number;
    lng?: number;
    metro_stations?: MetroStation[];
}

export interface Vacancy {
    id?: string;
    position?: string;
    address?: Address;
    salary?: Salary;
    description?: string;
}

export interface IQuery {
    vacancy(id: string): Vacancy | Promise<Vacancy>;
    vacancies(): Vacancy[] | Promise<Vacancy[]>;
}