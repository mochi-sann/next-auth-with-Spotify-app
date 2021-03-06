import { useState, useEffect } from 'react'
import axios from 'axios'
import { signOut } from 'next-auth/client'

import { DevaiceListType } from '../types'

export function useDeviceList(BearerToken?: string) {
  const [DevaiceList, setDevaiceList] = useState<DevaiceListType>([])

  useEffect(() => {
    if (BearerToken) {
      axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me/player/devices',
        headers: {
          Authorization: `Bearer ${BearerToken}`,
        },
      })
        .then(function (response: { data: { devices: DevaiceListType } }) {
          setDevaiceList(response.data.devices)
        })
        .catch(function (error) {
          signOut()
        })
    }
  }, [BearerToken])

  return DevaiceList
}
