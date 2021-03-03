import React from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Box,
  Image,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react'

import { Hamburger, Award } from 'assets/images'
import { RiSearch2Line } from 'react-icons/ri'
import { FiBell, FiShield } from 'react-icons/fi'

const Topbar = props => {
  return (
    <Flex
      w='100%'
      h={28}
      py={10}
      px={12}
      bgColor='zd.100'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex w='50%' alignItems='center'>
        <Box cursor='pointer'>
          <Image m='auto' src={Hamburger} />
        </Box>
        <Text
          ml={20}
          mr={10}
          fontFamily='heading'
          fontWeight='bold'
          fontSize='26px'
        >
          Wallet
        </Text>
        <Box h={8} borderLeft='1px' borderLeftColor='zd-border.200' />
        <InputGroup
          ml={4}
          h={14}
          w={72}
          border='transparent'
          _hover={{
            border: 'transparent'
          }}
        >
          <InputLeftElement h={14} pointerEvents='none' color='zd.400'>
            <Icon as={RiSearch2Line} boxSize={6} fontWeight='bold' />
          </InputLeftElement>
          <Input
            h={14}
            border='transparent'
            _hover={{
              border: 'transparent'
            }}
            _placeholder={{
              opacity: '0.7',
              color: 'zd.400'
            }}
            _focus={{
              borderRadius: 0,
              opacity: '0.8',
              borderBottom: '1px',
              borderBottomColor: 'zd.400'
            }}
            type='text'
            placeholder='Search'
          />
        </InputGroup>
      </Flex>
      <Flex w='50%' justifyContent='flex-end' alignItems='center'>
        <Box d='inline-block' pos='relative'>
          <Text
            as='span'
            py='5px' // '1px' when there is value
            px='5px' // '6px'  when there is value
            top='-3px' // '-10px'  when there is value
            right='2px' // '-4px'  when there is value
            fontSize='xs'
            color='white'
            pos='absolute'
            bgColor='red.500'
            borderRadius='50%'
          ></Text>
          <Icon as={FiBell} boxSize={6} />
        </Box>
        <Flex
          py={1}
          px={2}
          mx={8}
          color='white'
          fontSize='10px'
          fontWeight='800'
          alignItems='center'
          borderRadius='5px'
          bgColor='zd-blue.200'
        >
          <Icon as={FiShield} boxSize={4} />
          <Text ml={2}>OWNER</Text>
        </Flex>
        <Box>
          <Image src={Award} mx='auto' />
        </Box>
      </Flex>
    </Flex>
  )
}

Topbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Topbar
