import { signIn, signOut, useSession } from 'next-auth/client'

const AuthButton = () => {
  const [session] = useSession()

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button> {/* 👈ポイント② */}
        </>
      )}
      {session && (
        <>
          Signed in as <img src={session.user.image ?? ''} width="50px" />
          {/* 👈ポイント③ */}
          <p>{session.user.name}</p>
          <br />
          <p>AccessToken : {session.accessToken} </p>
          <br />
          <button onClick={() => signOut()}>Sign out</button>{' '}
          <pre>{JSON.stringify(session, null, 3)}</pre>
          {/* 👈ポイント④ */}
        </>
      )}
    </>
  )
}

export default AuthButton
