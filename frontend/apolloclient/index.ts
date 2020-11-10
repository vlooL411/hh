import fetch from 'cross-fetch'
import { HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

import { CacheConfig } from './CacheConfig'

let apolloClient: ApolloClient<NormalizedCacheObject>;
const isBrowser = typeof window === 'undefined';
const ssrMode = !isBrowser;

const { HOST_GRAPHQL } = process.env;

const httpLink = new HttpLink({
  uri: HOST_GRAPHQL,
  credentials: "include",
  fetch,
});

const cache = new InMemoryCache(CacheConfig);

const createApolloClient =
  (): ApolloClient<NormalizedCacheObject> =>
    new ApolloClient({
      ssrMode,
      cache,
      link: httpLink,
    });

export const initializeApollo =
  (initialState = null): ApolloClient<NormalizedCacheObject> => {
    const _apolloClient = apolloClient ?? createApolloClient();

    if (initialState) _apolloClient.cache.restore(initialState);
    if (ssrMode) return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
  };

export const useApollo =
  (initialState): ApolloClient<NormalizedCacheObject> =>
    useMemo(() => initializeApollo(initialState), [initialState]);
