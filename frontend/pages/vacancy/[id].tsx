import { useVacancyQuery } from '@generated/frontend';
import Header from 'components/Header';
import Vacancy, { VacancyLoader } from 'components/Vacancy';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const vacancyID = (): ReactElement => {
	const router = useRouter();
	const id = router.query?.id as string;
	const { data, loading, error } = useVacancyQuery({ variables: { id } });

	return (
		<div className='index'>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{loading || error ? <VacancyLoader /> : <Vacancy {...data?.vacancy} />}
			</div>
		</div>
	);
};

export default vacancyID;
