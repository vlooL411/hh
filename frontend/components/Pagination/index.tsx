import Link from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';
import { ReactElement, useEffect, useState } from 'react';

import style from './pagination.module.sass';

type Props = {
	current: number;
	length: number;
	maxLength: number;
	query?: string | ParsedUrlQueryInput;
};

const Pagination = ({
	current,
	length,
	maxLength,
	query,
}: Props): ReactElement => {
	const {
		pagination,
		pagination_empty,
		pagination_current,
		pagination_number,
	} = style;

	const [maxLengthPagination, setMaxLengthPagination] = useState<number>(
		maxLength,
	);

	useEffect(() => {
		window.onresize = _ =>
			setMaxLengthPagination(
				window.innerWidth < 500 ? maxLengthPagination / 2 : maxLengthPagination,
			);
	}, []);

	useEffect(() => {
		setMaxLengthPagination(maxLength);
	}, [maxLength]);

	if (length == 0) return null;

	const numbers: ReactElement[] = [];

	const Number = key =>
		numbers.push(
			<Link key={key} href={{ pathname: `${key}`, query }}>
				<a className={key == current ? pagination_current : pagination_number}>
					{key}
				</a>
			</Link>,
		);

	const Empty = (key = -1) =>
		numbers.push(
			<p key={key} className={pagination_empty}>
				...
			</p>,
		);

	const maxLengthHalf = Math.round(maxLengthPagination / 2);
	const countOthers = Math.round(maxLengthPagination / 4);
	const countCurrent = Math.round(countOthers * 3);

	const fillNumber = (begin: number, end: number) => {
		for (let i = begin; i <= end; i++) Number(i);
	};
	const fillNumbers = (startLength: number, endBegin: number) => {
		fillNumber(0, startLength);
		Empty();
		fillNumber(endBegin, length);
	};

	if (length <= maxLengthPagination) fillNumber(0, length);
	else if (current < maxLengthHalf)
		fillNumbers(countCurrent - 1, length - countOthers + 1);
	else if (current > length - maxLengthHalf - 1)
		fillNumbers(countOthers - 1, length - countCurrent + 1);
	else {
		fillNumber(0, 0);
		Empty();
		fillNumber(current - countOthers, current + countOthers);
		Empty(-2);
		fillNumber(length, length);
	}

	return <div className={pagination}>{numbers}</div>;
};

export default Pagination;
