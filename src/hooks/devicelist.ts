import { useState, useEffect } from 'react'
import axios from 'axios'

type DevaiceListType = {
  id: string
  is_active: boolean
  is_private_session: boolean
  is_restricted: boolean
  name: string
  type: string
  volume_percent: number
}[]

export function useDeviceList(BearerToken?: string) {
  const [DevaiceList, setDevaiceList] = useState<DevaiceListType>([])

  const config = {
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player/devices',
    headers: {
      Authorization: `Bearer ${BearerToken}`,
    },
  }

  useEffect(() => {
    if (BearerToken) {
      axios(config).then(function (response: {
        data: { devices: DevaiceListType }
      }) {
        setDevaiceList(response.data.devices)
      })
    }
  }, [BearerToken])

  return DevaiceList
}
