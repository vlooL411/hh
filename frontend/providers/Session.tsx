import { UserSafe } from '@generated/frontend';
import { useRouter } from 'next/router';
import { createContext, ReactElement, useEffect, useState } from 'react';

type TSessionContext = {
	user?: UserSafe;
	setUser?: (user: UserSafe) => void;
	remUser?: () => void;
};

export const SessionContext = createContext<TSessionContext>({});

type Props = {
	children: ReactElement | ReactElement[];
	callbackSignIn?: string;
	callbackSignOut?: string;
};

const userItem = 'User';

const SessionProvider = ({
	children,
	callbackSignIn = '/',
	callbackSignOut = '/signin',
}: Props) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const userLocalStorage = JSON.parse(
			localStorage.getItem(userItem),
		) as UserSafe;
		if (!user && userLocalStorage) setUser(userLocalStorage);
		else if (userLocalStorage) {
			if (callbackSignOut != router.pathname) return;
			router.push(callbackSignIn);
		} else router.push(callbackSignOut);
	}, [user]);

	const remUser = () => {
		localStorage.removeItem(userItem);
		router.push(callbackSignOut);
	};
	const SetUser = (user: UserSafe) => {
		if (!user) return;
		localStorage.setItem(userItem, JSON.stringify(user));
		router.push(callbackSignIn);
	};

	return (
		<SessionContext.Provider value={{ user, setUser: SetUser, remUser }}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionProvider;
