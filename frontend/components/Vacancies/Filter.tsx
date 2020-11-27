import { FilterVacancy } from '@frontend/types';
import { useRouter } from 'next/router';
import { ReactElement, useRef } from 'react';

import style from './styles/filter.module.sass';

type Props = {
	onChange?: (filter: FilterVacancy) => void;
};

const Filter = ({ onChange = () => null }: Props): ReactElement => {
	const { filter } = style;
	const router = useRouter();

	const jobRef = useRef<HTMLInputElement>(null!);
	const cityRef = useRef<HTMLInputElement>(null!);
	const salaryRef = useRef<HTMLInputElement>(null!);

	const OnChange = () => {
		const salary = salaryRef?.current?.value;
		const filter: FilterVacancy = {
			city: cityRef?.current?.value,
			name: jobRef?.current?.value,
			from: +salary <= 0 ? '1' : salary,
		};
		router.push({ query: { ...router.query, ...filter } });
		onChange(filter);
	};

	const query = router?.query;
	return (
		<div className={filter}>
			<input
				ref={jobRef}
				onChange={OnChange}
				placeholder='Job title'
				defaultValue={query?.name}
			/>
			<input
				ref={cityRef}
				onChange={OnChange}
				placeholder='City'
				defaultValue={query?.city}
			/>
			<input
				ref={salaryRef}
				onChange={OnChange}
				type='number'
				placeholder='Salary'
				defaultValue={query?.from}
			/>
		</div>
	);
};

export default Filter;
