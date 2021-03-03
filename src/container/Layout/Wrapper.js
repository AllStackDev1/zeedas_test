import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Wrapper = ({ children, ...rest }) => {
  return (
    <Flex w='100%'>
      <Sidebar {...rest} />
      <Flex direction='column' w='100%' bgColor='zd.body'>
        <Topbar {...rest} />
        <Box as='main' w='100%'>
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
