import Link from 'next/link';
import { ReactElement } from 'react';
import { Vacancy as TVacancy } from '@generated/frontend';
import { salaryProcess } from 'components/Common/salary';

import style from './styles/vacancy.module.sass';

const Vacancy = ({
	id,
	name,
	salary,
	snippet,
	area,
	employer,
}: TVacancy): ReactElement => {
	const { vacancy, vacancy_header, vacancy_info } = style;
	const { vacancy_logo, vacancy_description } = style;
	const { vacancy_footer, vacancy_respond, vacancy_salary } = style;

	return (
		<div className={vacancy}>
			<div>
				<Link href='/vacancy/[id]' as={`/vacancy/${id}`}>
					<a className={vacancy_header}>{name}</a>
				</Link>
				<div className={vacancy_info}>
					<p>Можно работать из дома</p>
					<p>{employer?.name}</p>
					<p>{area?.name}</p>
				</div>
			</div>
			<img className={vacancy_logo} src={employer?.logo_urls?.original} />
			<div className={vacancy_description}>
				<p>{snippet?.requirement}</p>
				<p>{snippet?.responsibility}</p>
			</div>
			<div className={vacancy_footer}>
				<a className={vacancy_respond}>Откликнуться</a>
				<p className={vacancy_salary}>{salaryProcess(salary)}</p>
			</div>
		</div>
	);
};

export default Vacancy;
