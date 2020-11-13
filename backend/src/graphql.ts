
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface FilterVacancy {
    name?: string;
    city?: string;
    from?: string;
}

export interface IUser {
    userId: string;
    username: string;
}

export interface IQuery {
    login(username: string, password: string): UserSafe | Promise<UserSafe>;
    vacancy(id: string): Vacancy | Promise<Vacancy>;
    vacancies(page?: number, input?: FilterVacancy): Vacancies | Promise<Vacancies>;
}

export interface Salary {
    to?: string;
    from?: string;
    currency?: string;
    gross?: boolean;
}

export interface Snippet {
    requirement?: string;
    responsibility?: string;
}

export interface LogoUrls {
    min?: string;
    normal?: string;
    original?: string;
}

export interface Employer {
    id?: string;
    name?: string;
    url?: string;
    logo_urls?: LogoUrls;
    alternate_url?: string;
    trusted?: boolean;
}

export interface Area {
    id?: string;
    url?: string;
    name?: string;
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

export interface UserSafe extends IUser {
    userId: string;
    username: string;
}

export interface User extends IUser {
    userId: string;
    username: string;
    password: string;
}

export interface Vacancy {
    id: string;
    name: string;
    area?: Area;
    salary?: Salary;
    description?: string;
    snippet?: Snippet;
    employer?: Employer;
}

export interface Vacancies {
    per_page?: number;
    page?: number;
    pages?: number;
    found?: number;
    items?: Vacancy[];
}
