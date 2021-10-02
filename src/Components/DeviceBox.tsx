import { Box, Heading, Text } from '@chakra-ui/layout'
import { Radio } from '@chakra-ui/radio'
import React from 'react'
import { DevaiceType } from '../types'

export type Props = {
  device: DevaiceType
}

const DeviceBox: React.VFC<Props> = (props) => {
  return (
    <Box >
      <Radio value={props.device.id}>
        <Box>
          <Heading>{props.device.name}</Heading>
          {props.device.is_active && <Text>再生中</Text>}
          {JSON.stringify(props.device)}
        </Box>
      </Radio>
    </Box>
  )
}

export default DeviceBox
