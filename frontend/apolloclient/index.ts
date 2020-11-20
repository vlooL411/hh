import { HttpLink } from '@apollo/client';
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import { Authorization, TokenType } from '@frontend/types';
import { onError } from '@apollo/client/link/error';

import RefreshToken from './RefreshToken';
import { CacheConfig } from './CacheConfig';

let apolloClient: ApolloClient<NormalizedCacheObject>;
const isBrowser = typeof window === 'undefined';
const ssrMode = !isBrowser;

const { HOST_GRAPHQL } = process.env;

const httpLink = new HttpLink({
	uri: HOST_GRAPHQL,
	credentials: 'include',
});

const getAuthorization = (): Authorization => {
	const auth = localStorage.getItem(TokenType.Authorization);
	if (!auth) return;

	try {
		return JSON.parse(auth);
	} catch (e) {
		localStorage.clear();
		throw e;
	}
};

const authLink = setContext((_, req) => {
	const headers = { ...req?.headers };

	const authorization = getAuthorization();
	headers[TokenType.Authorization] = authorization?.accessToken;

	return { headers };
});

const linkError = onError(({ graphQLErrors, operation, forward }) => {
	if (graphQLErrors)
		for (const { extensions } of graphQLErrors) {
			if (extensions?.exception?.status != 401) continue;

			const authorization = getAuthorization();
			const refreshToken = authorization?.refreshToken;

			if (!refreshToken) return;
			return RefreshToken(refreshToken, operation, forward);
		}
});

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
	new ApolloClient({
		ssrMode,
		cache: new InMemoryCache(CacheConfig),
		link: authLink.concat(linkError).concat(httpLink),
	});

export const initializeApollo = (
	initialState = null,
): ApolloClient<NormalizedCacheObject> => {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) _apolloClient.cache.restore(initialState);
	if (ssrMode) return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
};

export const useApollo = (initialState): ApolloClient<NormalizedCacheObject> =>
	useMemo(() => initializeApollo(initialState), [initialState]);
