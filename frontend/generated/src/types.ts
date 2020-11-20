import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Token: any;
};


export enum TokenType {
  Authorization = 'authorization'
}

export type Authorization = {
  __typename?: 'Authorization';
  accessToken?: Maybe<Scalars['Token']>;
  refreshToken?: Maybe<Scalars['Token']>;
};

export type Query = {
  __typename?: 'Query';
  Login?: Maybe<Authorization>;
  Refresh?: Maybe<Authorization>;
  vacancy?: Maybe<Vacancy>;
  vacancies?: Maybe<Vacancies>;
};


export type QueryLoginArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type QueryRefreshArgs = {
  refreshToken?: Maybe<Scalars['Token']>;
};


export type QueryVacancyArgs = {
  id: Scalars['ID'];
};


export type QueryVacanciesArgs = {
  page?: Maybe<Scalars['Int']>;
  input?: Maybe<FilterVacancy>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Register?: Maybe<UserSafe>;
};


export type MutationRegisterArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Salary = {
  __typename?: 'Salary';
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  gross?: Maybe<Scalars['Boolean']>;
};

export type Snippet = {
  __typename?: 'Snippet';
  requirement?: Maybe<Scalars['String']>;
  responsibility?: Maybe<Scalars['String']>;
};

export type LogoUrls = {
  __typename?: 'LogoUrls';
  min?: Maybe<Scalars['String']>;
  normal?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
};

export type Employer = {
  __typename?: 'Employer';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  logo_urls?: Maybe<LogoUrls>;
  alternate_url?: Maybe<Scalars['String']>;
  trusted?: Maybe<Scalars['Boolean']>;
};

export type Area = {
  __typename?: 'Area';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MetroStation = {
  __typename?: 'MetroStation';
  station_name?: Maybe<Scalars['String']>;
  line_name?: Maybe<Scalars['String']>;
  station_id?: Maybe<Scalars['String']>;
  line_id?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  metro_stations?: Maybe<Array<Maybe<MetroStation>>>;
};

export type IUser = {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UserSafe = IUser & {
  __typename?: 'UserSafe';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type User = IUser & {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Vacancy = {
  __typename?: 'Vacancy';
  id: Scalars['ID'];
  name: Scalars['String'];
  area?: Maybe<Area>;
  salary?: Maybe<Salary>;
  description?: Maybe<Scalars['String']>;
  snippet?: Maybe<Snippet>;
  employer?: Maybe<Employer>;
};

export type Vacancies = {
  __typename?: 'Vacancies';
  per_page?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  found?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Vacancy>>>;
};

export type FilterVacancy = {
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type LoginQueryVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type LoginQuery = (
  { __typename?: 'Query' }
  & { Login?: Maybe<(
    { __typename?: 'Authorization' }
    & Pick<Authorization, 'accessToken' | 'refreshToken'>
  )> }
);

export type VacancyInfoFragment = (
  { __typename?: 'Vacancy' }
  & Pick<Vacancy, 'id' | 'name'>
  & { area?: Maybe<(
    { __typename?: 'Area' }
    & AreaInfoFragment
  )>, salary?: Maybe<(
    { __typename?: 'Salary' }
    & SalaryInfoFragment
  )>, employer?: Maybe<(
    { __typename?: 'Employer' }
    & EmployerInfoFragment
  )> }
);

export type VacancyInfoDescriptionFragment = (
  { __typename?: 'Vacancy' }
  & Pick<Vacancy, 'description'>
  & VacancyInfoFragment
);

export type VacancyInfoSnippetFragment = (
  { __typename?: 'Vacancy' }
  & { snippet?: Maybe<(
    { __typename?: 'Snippet' }
    & SnippetInfoFragment
  )> }
  & VacancyInfoFragment
);

export type VacancyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VacancyQuery = (
  { __typename?: 'Query' }
  & { vacancy?: Maybe<(
    { __typename?: 'Vacancy' }
    & Pick<Vacancy, 'id'>
    & VacancyInfoDescriptionFragment
  )> }
);

export type VacanciesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  input?: Maybe<FilterVacancy>;
}>;


export type VacanciesQuery = (
  { __typename?: 'Query' }
  & { vacancies?: Maybe<(
    { __typename?: 'Vacancies' }
    & Pick<Vacancies, 'per_page' | 'page' | 'pages' | 'found'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Vacancy' }
      & Pick<Vacancy, 'id'>
      & VacancyInfoSnippetFragment
    )>>> }
  )> }
);

export type SalaryInfoFragment = (
  { __typename?: 'Salary' }
  & Pick<Salary, 'to' | 'from' | 'currency' | 'gross'>
);

export type SnippetInfoFragment = (
  { __typename?: 'Snippet' }
  & Pick<Snippet, 'requirement' | 'responsibility'>
);

export type AreaInfoFragment = (
  { __typename?: 'Area' }
  & Pick<Area, 'id' | 'url' | 'name'>
);

export type LogoUrlsInfoFragment = (
  { __typename?: 'LogoUrls' }
  & Pick<LogoUrls, 'min' | 'normal' | 'original'>
);

export type EmployerInfoFragment = (
  { __typename?: 'Employer' }
  & Pick<Employer, 'id' | 'name' | 'url' | 'alternate_url' | 'trusted'>
  & { logo_urls?: Maybe<(
    { __typename?: 'LogoUrls' }
    & LogoUrlsInfoFragment
  )> }
);

export type MetroStationInfoFragment = (
  { __typename?: 'MetroStation' }
  & Pick<MetroStation, 'station_name' | 'line_name' | 'station_id' | 'line_id' | 'lat' | 'lng'>
);

export type AddressInfoFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'city' | 'street' | 'building' | 'description' | 'lat' | 'lng'>
  & { metro_stations?: Maybe<Array<Maybe<(
    { __typename?: 'MetroStation' }
    & MetroStationInfoFragment
  )>>> }
);

export const AreaInfoFragmentDoc = gql`
    fragment AreaInfo on Area {
  id
  url
  name
}
    `;
export const SalaryInfoFragmentDoc = gql`
    fragment SalaryInfo on Salary {
  to
  from
  currency
  gross
}
    `;
export const LogoUrlsInfoFragmentDoc = gql`
    fragment LogoUrlsInfo on LogoUrls {
  min
  normal
  original
}
    `;
export const EmployerInfoFragmentDoc = gql`
    fragment EmployerInfo on Employer {
  id
  name
  url
  logo_urls {
    ...LogoUrlsInfo
  }
  alternate_url
  trusted
}
    ${LogoUrlsInfoFragmentDoc}`;
export const VacancyInfoFragmentDoc = gql`
    fragment VacancyInfo on Vacancy {
  id
  name
  area {
    ...AreaInfo
  }
  salary {
    ...SalaryInfo
  }
  employer {
    ...EmployerInfo
  }
}
    ${AreaInfoFragmentDoc}
${SalaryInfoFragmentDoc}
${EmployerInfoFragmentDoc}`;
export const VacancyInfoDescriptionFragmentDoc = gql`
    fragment VacancyInfoDescription on Vacancy {
  ...VacancyInfo
  description
}
    ${VacancyInfoFragmentDoc}`;
export const SnippetInfoFragmentDoc = gql`
    fragment SnippetInfo on Snippet {
  requirement
  responsibility
}
    `;
export const VacancyInfoSnippetFragmentDoc = gql`
    fragment VacancyInfoSnippet on Vacancy {
  ...VacancyInfo
  snippet {
    ...SnippetInfo
  }
}
    ${VacancyInfoFragmentDoc}
${SnippetInfoFragmentDoc}`;
export const MetroStationInfoFragmentDoc = gql`
    fragment MetroStationInfo on MetroStation {
  station_name
  line_name
  station_id
  line_id
  lat
  lng
}
    `;
export const AddressInfoFragmentDoc = gql`
    fragment AddressInfo on Address {
  city
  street
  building
  description
  lat
  lng
  metro_stations {
    ...MetroStationInfo
  }
}
    ${MetroStationInfoFragmentDoc}`;
export const LoginDocument = gql`
    query Login($username: String, $password: String) {
  Login(username: $username, password: $password) {
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const VacancyDocument = gql`
    query Vacancy($id: ID!) {
  vacancy(id: $id) {
    id
    ...VacancyInfoDescription
  }
}
    ${VacancyInfoDescriptionFragmentDoc}`;

/**
 * __useVacancyQuery__
 *
 * To run a query within a React component, call `useVacancyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacancyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVacancyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVacancyQuery(baseOptions: Apollo.QueryHookOptions<VacancyQuery, VacancyQueryVariables>) {
        return Apollo.useQuery<VacancyQuery, VacancyQueryVariables>(VacancyDocument, baseOptions);
      }
export function useVacancyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VacancyQuery, VacancyQueryVariables>) {
          return Apollo.useLazyQuery<VacancyQuery, VacancyQueryVariables>(VacancyDocument, baseOptions);
        }
export type VacancyQueryHookResult = ReturnType<typeof useVacancyQuery>;
export type VacancyLazyQueryHookResult = ReturnType<typeof useVacancyLazyQuery>;
export type VacancyQueryResult = Apollo.QueryResult<VacancyQuery, VacancyQueryVariables>;
export const VacanciesDocument = gql`
    query Vacancies($page: Int, $input: FilterVacancy) {
  vacancies(page: $page, input: $input) {
    per_page
    page
    pages
    found
    items {
      id
      ...VacancyInfoSnippet
    }
  }
}
    ${VacancyInfoSnippetFragmentDoc}`;

/**
 * __useVacanciesQuery__
 *
 * To run a query within a React component, call `useVacanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVacanciesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVacanciesQuery(baseOptions?: Apollo.QueryHookOptions<VacanciesQuery, VacanciesQueryVariables>) {
        return Apollo.useQuery<VacanciesQuery, VacanciesQueryVariables>(VacanciesDocument, baseOptions);
      }
export function useVacanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VacanciesQuery, VacanciesQueryVariables>) {
          return Apollo.useLazyQuery<VacanciesQuery, VacanciesQueryVariables>(VacanciesDocument, baseOptions);
        }
export type VacanciesQueryHookResult = ReturnType<typeof useVacanciesQuery>;
export type VacanciesLazyQueryHookResult = ReturnType<typeof useVacanciesLazyQuery>;
export type VacanciesQueryResult = Apollo.QueryResult<VacanciesQuery, VacanciesQueryVariables>;