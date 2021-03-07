import { Flex } from '@chakra-ui/react'

import Total from './Total'
import Chart from './Chart'

const TranscationCards = () => {
  return (
    <Flex
      py={5}
      w='100%'
      alignItems='stretch'
      borderBottom='1px dashed'
      justifyContent='space-between'
      borderBottomColor='zd-border.50'
    >
      <Total />
      <Chart />
    </Flex>
  )
}

export default TranscationCards
