import { useLoginLazyQuery } from '@generated/frontend';
import { ReactElement, useRef } from 'react';
import { SessionContext } from 'providers/Session';

import style from './signin.module.sass';

const Signin = (): ReactElement => {
	const {
		signin,
		signin_header,
		signin_input,
		signin_description,
		signin_button,
	} = style;
	const [loginQuery, { data }] = useLoginLazyQuery({
		fetchPolicy: 'network-only',
	});

	const usernameRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);

	const onClick = () => {
		const { value: username } = usernameRef.current;
		const { value: password } = passwordRef.current;

		if (username && password) {
			loginQuery({ variables: { username, password } });
			passwordRef.current.value = '';
		}
	};

	return (
		<SessionContext.Consumer>
			{({ user, setUser }) => {
				if (data?.login && user != data.login) setUser(data.login);

				return (
					<div className={signin}>
						<p className={signin_header}>Sign in to your personal account</p>
						<input
							ref={usernameRef}
							className={signin_input}
							placeholder='Username'
						/>
						<input
							ref={passwordRef}
							className={signin_input}
							placeholder='Password'
							type='password'
						/>
						<div className={signin_description}>
							Your username and password are possible: admin
						</div>
						<button className={signin_button} onClick={onClick}>
							Sign in
						</button>
					</div>
				);
			}}
		</SessionContext.Consumer>
	);
};

export default Signin;
