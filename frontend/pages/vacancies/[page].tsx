import Header from 'components/Header';
import Vacancies from 'components/Vacancies';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const vacancies = (): ReactElement => {
	const router = useRouter();
	const page = router?.query?.page as string;

	return (
		<div className='index'>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Vacancies page={+page} />
			</div>
		</div>
	);
};

export default vacancies;
