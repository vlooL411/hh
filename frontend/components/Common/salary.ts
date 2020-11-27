import { Salary } from '@frontend/types';

export const salaryProcess = (salary: Salary) => {
	let sal = '';
	if (salary?.from) sal = `от ${salary.from} ${salary?.currency} `;
	if (salary?.to) sal += `до ${salary.to} ${salary?.currency}`;
	if (sal == '') return 'з/п не указана';
	return sal;
};
