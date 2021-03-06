import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Wrapper = ({ children, ...rest }) => {
  return (
    <Flex w='100%'>
      <Sidebar {...rest} />
      <Flex w='100%' direction='column' bgColor='zd.body' pos='relative'>
        <Topbar {...rest} />
        <Box
          as='main'
          w='100%'
          pt={28}
          h='100vh'
          zIndex={0}
          pos='relative'
          overflowY='auto'
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
