import 'public/styles/globals.sass';

import AuthProvider from 'providers/Auth';
import { ApolloProvider } from '@apollo/client';
import { ReactElement } from 'react';
import { initializeApollo } from 'apolloclient';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
	<AuthProvider>
		<ApolloProvider client={initializeApollo()}>
			<Component {...pageProps} />
		</ApolloProvider>
	</AuthProvider>
);

export default App;
