import {
  Flex,
  Box,
  Text,
  Icon,
  Input,
  Avatar,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'
import { FiBell, FiShield, FiChevronDown, FiChevronUp } from 'react-icons/fi'

import useApp from 'context/app'

import { Hamburger, Award } from 'assets/icons'
import DrowdownMenu from 'components/DropdownMenu'

const Topbar = () => {
  const {
    menus,
    appProps,
    isTopbarDropdownOpen,
    toggleTopbarDropdown
  } = useApp()
  const noticeCount = 0

  return (
    <Flex
      w='100%'
      h={28}
      py={10}
      pl={10}
      pr={20}
      zIndex={40}
      pos='absolute'
      bgColor='zd.100'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex w='50%' alignItems='center'>
        <Box cursor='pointer'>
          <Icon m='auto' as={Hamburger} w='28px' h='20px' />
        </Box>
        <Text
          ml={20}
          mr={10}
          textTransform='capitalize'
          fontFamily='heading'
          fontWeight='bold'
          fontSize='26px'
        >
          {appProps?.location?.pathname?.split('/')[1]}
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
            py={!noticeCount ? '5px' : '1px'}
            px={!noticeCount ? '5px' : '6px'}
            top={!noticeCount ? '-3px' : '-10px'}
            right={!noticeCount ? '2px' : '-4px'}
            fontSize='xs'
            color='white'
            pos='absolute'
            bgColor='red.500'
            borderRadius='50%'
          >
            {!!noticeCount && noticeCount}
          </Text>
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
          bgColor='zd-blue.500'
        >
          <Icon as={FiShield} boxSize={4} />
          <Text ml={2}>OWNER</Text>
        </Flex>
        <Box mr={8}>
          <Icon m='auto' as={Award} w='25px' h='31px' />
        </Box>
        <Flex
          shrink='0'
          as='button'
          type='button'
          alignItems='center'
          aria-haspopup='true'
          aria-expanded='true'
          _focus={{ outline: 'none' }}
          direction={{ md: 'column', lg: 'row' }}
          onClick={toggleTopbarDropdown}
        >
          <Flex alignItems='center'>
            <Avatar
              size='md'
              title='profile avatar'
              src={require('assets/images/user.png').default}
            />
          </Flex>
          <Flex ml={{ lg: 3 }}>
            <Box textAlign='left'>
              <Text
                fontSize='sm'
                lineHeight='3'
                fontWeight='medium'
                textColor='gray.700'
              >
                Chioma Davis
              </Text>
              <Text
                fontSize='x-small'
                lineHeight='3'
                fontWeight='medium'
                textColor='zd-blue.500'
              >
                Chioma@natterbase
              </Text>
            </Box>
            <Box ml={2}>
              {isTopbarDropdownOpen ? (
                <Icon as={FiChevronUp} />
              ) : (
                <Icon as={FiChevronDown} />
              )}
            </Box>
          </Flex>
        </Flex>
        <DrowdownMenu {...{ menus, isOpen: isTopbarDropdownOpen }} />
      </Flex>
    </Flex>
  )
}

export default Topbar
