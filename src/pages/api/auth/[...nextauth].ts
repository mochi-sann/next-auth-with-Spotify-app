import NextAuth from 'next-auth'

import SpotifyProvider from 'next-auth/providers/spotify'
import { GenericObject } from 'next-auth/utils'

export default NextAuth({
  providers: [
    //👈ポイント①
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? '',
    // }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scope:
        'user-read-email playlist-read-private user-read-playback-state user-read-playback-position user-modify-playback-state user-read-currently-playing streaming',
    }),
  ],
  callbacks: {
    // async jwt(token, user, account) {
    //   //👈ポイント②
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken
    //   }
    //   return token
    // },
    // async session(session, token) {
    //   //👈ポイント③
    //   session.accessToken = (token as GenericObject).accessToken
    //   return session
    // },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        `🚀 ~ file: [...nextauth].ts ~ line 34 ~ signIn ~ { user, account, profile, email, credentials }`,
        { user, account, profile, email, credentials }
      )
      return { user, account, profile, email, credentials }
    },
    async redirect({ url, baseUrl }) {
      console.log(
        `🚀 ~ file: [...nextauth].ts ~ line 37 ~ redirect ~ { url, baseUrl }`,
        { url, baseUrl }
      )
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log(
        `🚀 ~ file: [...nextauth].ts ~ line 42 ~ session ~ { session, user, token }`,
        { session, user, token }
      )
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(
        `🚀 ~ file: [...nextauth].ts ~ line 46 ~ jwt ~ { token, user, account, profile, isNewUser }`,
        { token, user, account, profile, isNewUser }
      )
      return token
    },
  },
})
