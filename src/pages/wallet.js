import { Box } from '@chakra-ui/react'
import useSetAppProps from 'hooks/useSetAppProps'
import { Balance, TranscationCards } from 'components/Wallet'

const Wallet = props => {
  useSetAppProps(props)

  return (
    <Box py={{ lg: 10 }} px={{ lg: 32 }}>
      <Box w='63%'>
        <Balance />
        <TranscationCards />
      </Box>
      <Box w='35%'></Box>
    </Box>
  )
}

export default Wallet