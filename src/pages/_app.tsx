import { Provider as NextAuthProvider } from 'next-auth/client'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextAuthProvider session={session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}
