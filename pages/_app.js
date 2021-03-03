import {useEffect} from 'react'
import Head from 'next/head'
import {ChakraProvider} from '@chakra-ui/react'
import {useRouter} from 'next/router'

function MyApp({Component, pageProps}) {
  const routers = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = url => {
        analytics().setCurrentScreen(url)
        analytics().logEvent('screen_view')
      }

      routers.events.on('routeChangeComplete', logEvent)
      //For First Page
      logEvent(window.location.pathname)

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent)
      }
    }
  }, [])

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
