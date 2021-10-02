import { useSession } from 'next-auth/client'
import React from 'react'
import { useDeviceList } from '../hooks/devicelist'
import { PlayerPause, PlayerStart } from '../lib/SporifyApi'

const SpotifyPlayer: React.VFC = () => {
  const [session] = useSession() //👈ポイント①
  const DevaiceList = useDeviceList((session && session.accessToken) || '') //👈ポイント②
  return (
    <>
      <div>
        <p>{DevaiceList && JSON.stringify(DevaiceList)}</p>
        {session && session.accessToken && (
          <>
            <button onClick={() => PlayerPause(session.accessToken as string)}>
              ぽーず
            </button>
            <button onClick={() => PlayerStart(session.accessToken as string)}>
              スタート
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SpotifyPlayer
