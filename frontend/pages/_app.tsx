import 'public/styles/globals.sass'

import { ApolloProvider } from '@apollo/client'
import { ReactElement } from 'react'
import { initializeApollo } from 'apolloclient'

const App = ({ Component, pageProps }): ReactElement =>
  <ApolloProvider client={initializeApollo()}>
    <Component {...pageProps} />
  </ApolloProvider >

export default App