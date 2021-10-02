import NextAuth from 'next-auth'

import Provider from 'next-auth/providers'
// import { GenericObject } from 'next-auth/utils'

export default NextAuth({
  providers: [
    //👈ポイント①
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? '',
    // }),
    Provider.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scope:
        'user-read-email playlist-read-private user-read-playback-state user-read-playback-position user-modify-playback-state user-read-currently-playing streaming',
    }),
  ],
  callbacks: {
    async jwt(token, user, account) {
      //👈ポイント②
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },
    async session(session, token) {
      //👈ポイント③
      session.accessToken = token.accessToken
      return session
    },
  },
})
