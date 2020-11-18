import Signout from 'components/Signout';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import style from './header.module.sass';

const Header = (): ReactElement => {
	const { header, header_logo, header_title, header_signout } = style;

	return (
		<div className={header}>
			<Link href='/'>
				<a>
					<Image
						className={header_logo}
						src='/images/hh.ru__min_.svg'
						width={48}
						height={48}
					/>
				</a>
			</Link>
			<Link href='/'>
				<a>
					<p className={header_title}>Test task</p>
				</a>
			</Link>
			<Signout className={header_signout}>
				<>Sign out</>
			</Signout>
		</div>
	);
};

export default Header;
