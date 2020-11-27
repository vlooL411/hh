/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TokenType {
	authorization = 'authorization',
}

export interface FilterVacancy {
	name?: string;
	city?: string;
	from?: string;
}

export interface IUser {
	id?: string;
	username?: string;
}

export interface Authorization {
	accessToken?: Token;
	refreshToken?: Token;
}

export interface IQuery {
	Login(
		username?: string,
		password?: string,
	): Authorization | Promise<Authorization>;
	Refresh(refreshToken?: Token): Authorization | Promise<Authorization>;
	vacancy(id: string): Vacancy | Promise<Vacancy>;
	vacancies(
		page?: number,
		input?: FilterVacancy,
	): Vacancies | Promise<Vacancies>;
}

export interface IMutation {
	Register(username?: string, password?: string): UserSafe | Promise<UserSafe>;
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
	id?: string;
	username?: string;
}

export interface User extends IUser {
	id?: string;
	username?: string;
	password?: string;
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

export type Token = any;
