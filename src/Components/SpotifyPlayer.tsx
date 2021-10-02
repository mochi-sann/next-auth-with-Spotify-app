import { Button } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { useSession } from 'next-auth/client'
import React from 'react'
import { useRecoilState } from 'recoil'
import { useDeviceList } from '../hooks/devicelist'
import { PlayerPause, PlayerStart } from '../lib/SporifyApi'
import { ActiveDeveice } from '../state/ActiveDeveice'
import DeviceSelecter from './deviceSelect'

const SpotifyPlayer: React.VFC = () => {
  const [session] = useSession() //👈ポイント①
  const [DevaiceID] = useRecoilState(ActiveDeveice)

  const DevaiceList = useDeviceList(
    ((session && session.accessToken) as string) || ''
  ) //👈ポイント②
  return (
    <>
      <div>
        {DevaiceList[0] && (
          <>
            <DeviceSelecter DevaiceList={DevaiceList} />
            {/* <p>{DevaiceList && JSON.stringify(DevaiceList)}</p> */}
          </>
        )}
        {session && session.accessToken && (
          <Stack direction={['column', 'row']}>
            <Button
              onClick={() =>
                PlayerPause(session.accessToken as string, DevaiceID)
              }
            >
              ぽーず
            </Button>
            <Button
              onClick={() =>
                PlayerStart(session.accessToken as string, DevaiceID)
              }
            >
              スタート
            </Button>
          </Stack>
        )}
      </div>
    </>
  )
}

export default SpotifyPlayer
