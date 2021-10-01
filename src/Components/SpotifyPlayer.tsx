import { useSession } from 'next-auth/react'
import React from 'react'
import { PlayerPause, PlayerStart } from '../lib/SporifyApi'

const SpotifyPlayer: React.VFC = () => {
  const { data: session } = useSession() //👈ポイント①

  return (
    <>
      <button onClick={() => PlayerPause(session.accessToken as string)}>
        ぽーず
      </button>
      <button onClick={() => PlayerStart(session.accessToken as string)}>
        スタート
      </button>
    </>
  )
}

export default SpotifyPlayer
