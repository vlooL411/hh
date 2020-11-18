import { ReactElement } from 'react';
import { SessionContext } from 'providers/Session';

type Props = {
	className?: string;
	children: ReactElement | ReactElement;
};

const Signout = ({ children, className = '' }: Props): ReactElement => {
	return (
		<SessionContext.Consumer>
			{({ remUser }) => (
				<button className={className} onClick={remUser}>
					{children}
				</button>
			)}
		</SessionContext.Consumer>
	);
};

export default Signout;
