export namespace Model {
	export type Vacancies = {
		per_page: number;
		page: number;
		pages: number;
		found: number;
		clusters: any;
		Items: Vacancy[];
	};

	export type Vacancy = {
		id: string;
		description: string;
		snippet: Snippet;
		branded_description: string;
		key_skills: KeySkill[];
		schedule: BillingType;
		accept_handicapped: boolean;
		accept_kids: boolean;
		experience: BillingType;
		address: Address;
		alternate_url: string;
		apply_alternate_url: string;
		code: string;
		department: BillingType;
		employment: BillingType;
		salary: Salary;
		archived: boolean;
		name: string;
		insider_interview: InsiderInterview;
		area: Area;
		created_at: string;
		published_at: string;
		relations: any[];
		negotiations_url: string;
		allow_messages: boolean;
		suitable_resumes_url: string;
		employer: Employer;
		response_letter_required: boolean;
		type: BillingType;
		has_test: boolean;
		response_url: null;
		test: Test;
		specializations: Specialization[];
		contacts: Contacts;
		billing_type: BillingType;
		driver_license_types: DriverLicenseType[];
		accept_incomplete_resumes: boolean;
	};

	export type Snippet = {
		requirement: string;
		responsibility: string;
	};

	export type Address = {
		city: string;
		street: string;
		building: string;
		description: string;
		lat: number;
		lng: number;
		metro_stations: MetroStation[];
	};

	export type MetroStation = {
		station_name: string;
		line_name: string;
		station_id: string;
		line_id: string;
		lat: number;
		lng: number;
	};

	export type Area = {
		url: string;
		id: string;
		name: string;
	};

	export type BillingType = {
		id: string;
		name: string;
	};

	export type Contacts = {
		name: string;
		email: string;
		phones: Phone[];
	};

	export type Phone = {
		comment: null;
		city: string;
		number: string;
		country: string;
	};

	export type DriverLicenseType = {
		id: string;
	};

	export type Employer = {
		logo_urls: LogoUrls;
		name: string;
		url: string;
		alternate_url: string;
		id: string;
		trusted: boolean;
	};

	export type LogoUrls = {
		'90': string;
		'240': string;
		original: string;
	};

	export type InsiderInterview = {
		id: string;
		url: string;
	};

	export type KeySkill = {
		name: string;
	};

	export type Salary = {
		to: string;
		from: string;
		currency: string;
		gross: boolean;
	};

	export type Specialization = {
		profarea_id: string;
		profarea_name: string;
		id: string;
		name: string;
	};

	export type Test = {
		required: boolean;
	};
}
