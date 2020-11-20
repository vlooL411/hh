import { ReactElement } from 'react';
import { AuthContext } from 'providers/Auth';

type Props = {
	className?: string;
	children: ReactElement | ReactElement;
};

const Signout = ({ children, className = '' }: Props): ReactElement => {
	return (
		<AuthContext.Consumer>
			{({ remAuth }) => (
				<button className={className} onClick={remAuth}>
					{children}
				</button>
			)}
		</AuthContext.Consumer>
	);
};

export default Signout;
