import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

const Transfer = ({ to, amount }) => {
  return (
    <Flex fontSize='sm' fontFamily='WorkSans' fontWeight='bold'>
      <Text as='span' textColor='gray.400'>
        You sent
      </Text>
      <Text as='span' mx={1}>
        {amount}
      </Text>
      <Text as='span' textColor='gray.400' mr={1}>
        to
      </Text>
      <Text as='span'>{to}</Text>
    </Flex>
  )
}

Transfer.propTypes = {
  to: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}

export default Transfer
