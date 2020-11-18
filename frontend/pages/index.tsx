import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

const index = (): ReactElement => {
	const router = useRouter();
	useEffect(() => {
		router.push('./vacancies/0');
	});
	return null;
};

export default index;
