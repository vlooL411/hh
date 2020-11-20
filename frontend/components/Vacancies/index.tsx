import Pagination from 'components/Pagination';
import { FilterVacancy, useVacanciesLazyQuery } from '@frontend/types';
import { ReactElement, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import Filter from './Filter';
import style from './styles/vacancies.module.sass';
import Vacancy from './Vacancy';
import VacancyLoader from './VacancyLoader';

type Props = { page: number };

const Vacancies = ({ page }: Props): ReactElement => {
	const { vacancies } = style;
	const [vacanciesQuery, { data, loading, error }] = useVacanciesLazyQuery({
		pollInterval: 100,
	});

	const router = useRouter();
	const { page: _, query } = router?.query;

	useEffect(() => {
		vacanciesQuery({ variables: { page } });
	}, [page]);

	const onChange = (filter: FilterVacancy) =>
		vacanciesQuery({ variables: { page, input: filter } });

	const VacanciesLoader = useMemo(
		() => Array.from({ length: 20 }, (_, key) => <VacancyLoader key={key} />),
		[],
	);

	return (
		<div className={vacancies}>
			<Filter onChange={onChange} />
			{loading || error
				? VacanciesLoader
				: data?.vacancies.items.map(vacancy => (
						<Vacancy {...vacancy} key={vacancy.id} />
				  ))}
			<Pagination
				query={query as string}
				current={page}
				length={40}
				maxLength={8}
			/>
		</div>
	);
};

export default Vacancies;
