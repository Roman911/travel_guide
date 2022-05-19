import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { Theme } from '../Components'

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Theme >
    <Component {...pageProps} />
  </Theme>
}

export default wrapper.withRedux(WrappedApp)