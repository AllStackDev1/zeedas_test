import PropTypes from 'prop-types'
import { Box, Flex, Text } from '@chakra-ui/react'

import Topup from './Topup'
import Withdraw from './Withdraw'
import Transfer from './Transfer'

const TableItem = ({ idx, len, ...rest }) => {
  const getContent = () => {
    switch (rest.type) {
      case 'withdraw':
        return <Withdraw {...rest} />
      case 'topup':
        return <Topup {...rest} />
      case 'transfer':
        return <Transfer {...rest} />
      default:
        return null
    }
  }

  const getColor = () => {
    switch (rest.type) {
      case 'withdraw':
        return 'blue'
      case 'topup':
        return 'yellow'
      case 'transfer':
        return 'green'
      default:
        return null
    }
  }

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Flex
        w={7}
        h={7}
        pos='relative'
        direction='column'
        borderRadius='50%'
        alignItems='center'
        bgColor={`zd-${getColor()}.100`}
        justifyContent='center'
      >
        {!!idx && (
          <Box
            h={4}
            top='-20px'
            pos='absolute'
            borderLeft='1px dashed'
            borderLeftColor='zd-border.50'
          />
        )}
        <Box w={2} h={2} borderRadius='50%' bgColor={`zd-${getColor()}.500`} />
        {idx !== len - 1 && (
          <Box
            h={4}
            bottom='-20px'
            borderLeft='1px dashed'
            pos='absolute'
            borderLeftColor='zd-border.50'
          />
        )}
      </Flex>
      <Flex
        w='100%'
        ml={10}
        py={6}
        borderBottom={idx !== len - 1 && '1px'}
        alignItems='center'
        borderBottomColor='zd-border.50'
        justifyContent='space-between'
      >
        {getContent()}
        <Text fontSize='xs' textColor='gray.400' fontWeight='normal'>
          {rest?.time}
        </Text>
      </Flex>
    </Flex>
  )
}

TableItem.propTypes = {
  idx: PropTypes.number,
  len: PropTypes.number
}

export default TableItem
