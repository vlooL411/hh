import LoaderText from 'components/Loader/LoaderText';
import { ReactElement } from 'react';

import style from './styles/vacancyloader.module.sass';

const VacancyLoader = (): ReactElement => {
	const {
		vacancyloader,
		vacancyloader_logo,
		vacancyloader_description,
	} = style;
	const {
		vacancyloader_title,
		vacancyloader_salary,
		vacancyloader_employer,
		vacancyloader_area,
	} = style;

	return (
		<div className={vacancyloader}>
			<LoaderText className={vacancyloader_logo} />
			<LoaderText className={vacancyloader_title} />
			<LoaderText className={vacancyloader_salary} />
			<LoaderText className={vacancyloader_employer} />
			<LoaderText className={vacancyloader_area} />
			<LoaderText className={vacancyloader_description} />
		</div>
	);
};

export default VacancyLoader;
