import Head from "next/head"
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>EZ Mangás | Mangás de qualidade sem ads abusivos ;)</title>

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />

      <meta
        name="description"
        content="Mangás de qualidade sem ads abusivos ;)"
      />

      <meta name="keywords" content="ez mangás, mangás, naruto, one piece" />
    </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );

}

export default MyApp
