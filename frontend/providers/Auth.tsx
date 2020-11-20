import { Authorization, TokenType } from '@frontend/types';
import { useRouter } from 'next/router';
import { createContext, ReactElement, useEffect, useState } from 'react';

type TAuthContext = {
	auth?: Authorization;
	setAuth?: (auth: Authorization) => void;
	remAuth?: () => void;
};

export const AuthContext = createContext<TAuthContext>({});

type Props = {
	children: ReactElement | ReactElement[];
	callbackSignIn?: string;
	callbackSignOut?: string;
};

const name = TokenType.Authorization;

const AuthProvider = ({
	children,
	callbackSignIn = '/',
	callbackSignOut = '/signin',
}: Props) => {
	const [auth, setAuth] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const item = localStorage.getItem(name);
		const authLocalStorage = JSON.parse(item) as string;

		if (!auth && authLocalStorage) setAuth(authLocalStorage);
		else if (authLocalStorage) {
			if (callbackSignOut != router.pathname) return;
			router.push(callbackSignIn);
		} else router.push(callbackSignOut);
	}, [auth]);

	const remAuth = () => {
		localStorage.removeItem(name);
		router.push(callbackSignOut);
	};

	const SetAuth = (auth: Authorization) => {
		if (!auth) return;
		localStorage.setItem(name, JSON.stringify(auth));
		router.push(callbackSignIn);
	};

	return (
		<AuthContext.Provider value={{ auth, setAuth: SetAuth, remAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
