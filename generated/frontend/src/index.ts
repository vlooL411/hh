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
};

export type Salary = {
  __typename?: 'Salary';
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  gross?: Maybe<Scalars['Boolean']>;
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

export type Vacancy = {
  __typename?: 'Vacancy';
  id?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  salary?: Maybe<Salary>;
  description?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  vacancy?: Maybe<Vacancy>;
  vacancies: Array<Maybe<Vacancy>>;
};


export type QueryVacancyArgs = {
  id: Scalars['ID'];
};

export type VacancyInfoFragment = (
  { __typename?: 'Vacancy' }
  & Pick<Vacancy, 'position' | 'description'>
  & { address?: Maybe<(
    { __typename?: 'Address' }
    & AddressInfoFragment
  )>, salary?: Maybe<(
    { __typename?: 'Salary' }
    & SalaryInfoFragment
  )> }
);

export type VacancyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VacancyQuery = (
  { __typename?: 'Query' }
  & { vacancy?: Maybe<(
    { __typename?: 'Vacancy' }
    & Pick<Vacancy, 'id'>
    & VacancyInfoFragment
  )> }
);

export type VacanciesQueryVariables = Exact<{ [key: string]: never; }>;


export type VacanciesQuery = (
  { __typename?: 'Query' }
  & { vacancies: Array<Maybe<(
    { __typename?: 'Vacancy' }
    & Pick<Vacancy, 'id'>
    & VacancyInfoFragment
  )>> }
);

export type SalaryInfoFragment = (
  { __typename?: 'Salary' }
  & Pick<Salary, 'to' | 'from' | 'currency' | 'gross'>
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
export const SalaryInfoFragmentDoc = gql`
    fragment SalaryInfo on Salary {
  to
  from
  currency
  gross
}
    `;
export const VacancyInfoFragmentDoc = gql`
    fragment VacancyInfo on Vacancy {
  position
  address {
    ...AddressInfo
  }
  salary {
    ...SalaryInfo
  }
  description
}
    ${AddressInfoFragmentDoc}
${SalaryInfoFragmentDoc}`;
export const VacancyDocument = gql`
    query Vacancy($id: ID!) {
  vacancy(id: $id) {
    id
    ...VacancyInfo
  }
}
    ${VacancyInfoFragmentDoc}`;

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
    query Vacancies {
  vacancies {
    id
    ...VacancyInfo
  }
}
    ${VacancyInfoFragmentDoc}`;

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