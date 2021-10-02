import React, { useEffect } from 'react'
import { DevaiceListType, DevaiceType } from '../types'
import { RadioGroup, Text } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { ActiveDeveice } from '../state/ActiveDeveice'
import DeviceBox from './DeviceBox'

export type Props = { DevaiceList: DevaiceListType }

const DeviceSelecter: React.VFC<Props> = (props) => {
  const IsActive = (devices: DevaiceType) => {
    return devices.is_active === true
  }

  const [DevaiceID, setDevaiceID] = useRecoilState(ActiveDeveice)
  useEffect(() => {
    setDevaiceID(
      props.DevaiceList.find(IsActive)?.id || props.DevaiceList[0].id
    )
  }, [props.DevaiceList])

  return (
    <>
      <Text>DevaiceID:{DevaiceID}</Text>
      <RadioGroup onChange={setDevaiceID} value={DevaiceID}>
        {props.DevaiceList.map((value) => {
          return <DeviceBox device={value} key={value.id} />
        })}
      </RadioGroup>
    </>
  )
}

export default DeviceSelecter
