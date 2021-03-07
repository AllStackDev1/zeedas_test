import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

const Withdraw = ({ title, amount }) => {
  return (
    <Flex fontSize='sm' fontFamily='WorkSans' fontWeight='bold'>
      <Text as='span'>{title}</Text>
      <Text as='span' textColor='gray.400' mx={1}>
        withdrew fund sent
      </Text>
      <Text as='span'>{amount}</Text>
    </Flex>
  )
}

Withdraw.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}

export default Withdraw
