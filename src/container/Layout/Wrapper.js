import PropTypes from 'prop-types'
import { Box, Flex, Image } from '@chakra-ui/react'

import { BackgroundLogo } from 'assets/images'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Wrapper = ({ children }) => {
  return (
    <Flex w='100%' h='100vh' overflow='hidden'>
      <Sidebar />
      <Flex w='100%' direction='column' bgColor='zd.body' pos='relative'>
        <Topbar />
        <Box
          as='main'
          w='100%'
          pt={28}
          h='100vh'
          zIndex={20}
          pos='relative'
          overflowY='auto'
        >
          {children}
        </Box>
        <Image
          w='600px'
          mx='auto'
          pos='absolute'
          bottom='-100px'
          right='-165px'
          src={BackgroundLogo}
          alt='Zeedas background Logo'
        />
      </Flex>
    </Flex>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
