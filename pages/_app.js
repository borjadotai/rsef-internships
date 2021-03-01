import Head from 'next/head'
import {ChakraProvider} from '@chakra-ui/react'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>RSEF Students Group Interships</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
