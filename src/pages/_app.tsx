import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextAuthProvider session={session}>
      <ChakraProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </NextAuthProvider>
  )
}
