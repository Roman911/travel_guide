import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import dayjs from 'dayjs'
import 'dayjs/locale/uk'
import moment from 'moment'
import 'moment/locale/uk'
import 'react-quill/dist/quill.snow.css'
import { useApollo } from '../lib/apolloClient'
import '../styles/globals.css'
import { wrapper } from '../store/store'
import { Theme } from '../Components'

dayjs.locale('uk')
moment.locale('uk')

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Theme>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </Theme>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(WrappedApp)
