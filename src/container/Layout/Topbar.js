import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'

// import { RiSearch2Line } from 'react-icons/ri'
// import { FiBell, FiShield } from 'react-icons/fi'

const Topbar = props => {
  return (
    <Flex
      w='100%'
      h={28}
      bgColor='zd.100'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex w='50%' alignItems='center'>
        left side
      </Flex>
      <Flex w='50%' alignItems='center'>
        right side
      </Flex>
    </Flex>
  )
}

Topbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Topbar
