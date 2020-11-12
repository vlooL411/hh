import 'public/styles/globals.sass'

import SessionProvider from 'providers/Session'
import { ApolloProvider } from '@apollo/client'
import { ReactElement } from 'react'
import { initializeApollo } from 'apolloclient'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const App = ({ Component, pageProps }: AppProps): ReactElement =>
  <SessionProvider>
    <ApolloProvider client={initializeApollo()}>
      <Component {...pageProps} />
    </ApolloProvider>
  </SessionProvider>

export default App