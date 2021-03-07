import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

const Topup = ({ amount }) => {
  return (
    <Flex fontSize='sm' fontFamily='WorkSans' fontWeight='bold'>
      <Text as='span' textColor='gray.400' mr={1}>
        you funded your wallet with
      </Text>
      <Text as='span'>{amount}</Text>
    </Flex>
  )
}

Topup.propTypes = {
  amount: PropTypes.string.isRequired
}

export default Topup
