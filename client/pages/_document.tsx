import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import React from "react"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='http://35.225.249.204:3005' />
          <link rel="icon" href={'/favicon.ico'} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument