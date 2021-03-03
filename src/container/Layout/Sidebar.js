import React from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Box,
  Text,
  Link,
  Image,
  Icon,
  Button,
  Avatar
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { FiHome, FiGitPullRequest, FiUsers, FiPlus } from 'react-icons/fi'
import { IoWalletOutline } from 'react-icons/io5'
import { Logo, AIllustration, BackgroundLogo } from 'assets/images'

const Sidebar = props => {
  const menus = [
    { name: 'Overview', link: '/', icon: FiHome },
    { name: 'Projects', link: '/', icon: FiGitPullRequest },
    { name: 'Tasks', link: '/', icon: FiUsers },
    { name: 'Wallet', link: '/', icon: IoWalletOutline, active: true }
  ]

  const myTeam = [
    { name: 'Prince Natterbase', color: '#23B3E8' },
    { name: 'Jerry ibea', color: '#4DBD98' },
    { name: 'Lois Genesis', color: '#3D43A2' },
    { name: 'Andrew Wams', color: '#F15832' }
  ]

  return (
    <Flex w={{ md: '22.5rem' }} h='100vh' bgColor='zd.800' direction='column'>
      <Flex h='100%' direction='column' overflowY='auto' pos='relative'>
        <Flex h={28} pl={8} borderBottom='1px' borderBottomColor='zd-border'>
          <Image src={Logo} w={{ md: '10rem' }} alt='Zeedas logo' />
        </Flex>
        <Flex as='nav' borderBottom='1px' borderBottomColor='zd-border'>
          <Flex as='ul' direction='column' w='100%' p={10}>
            {menus.map(i => (
              <Link
                pb={4}
                exact
                d='flex'
                key={i.name}
                color='white'
                to={i.link}
                as={NavLink}
                fontSize='md'
                fontWeight='bold'
                lineHeight='19px'
                alignItems='center'
                _hover={{ textDecor: 'none' }}
                _focus={{ textDecor: 'none' }}
              >
                <Box
                  p={3}
                  bgColor={i.active ? 'zd-blue.200' : ''}
                  borderRadius='10px'
                >
                  <Icon as={i.icon} boxSize={6} />
                </Box>
                <Text ml={3} color={i.active ? 'zd-blue.200' : ''}>
                  {i.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex
          pb={5}
          pt={10}
          px={10}
          direction='column'
          borderBottom='1px'
          borderBottomColor='zd-border'
        >
          <Flex
            color='white'
            alignItems='center'
            justifyContent='space-between'
          >
            <Text fontSize='sm' textColor='gray.400'>
              My Teams
            </Text>
            <Icon as={FiPlus} boxSize={6} cursor='pointer' />
          </Flex>
          <Flex as='ul' mt={5} direction='column' w='100%'>
            {myTeam.map(i => (
              <Link
                to='#'
                pb={4}
                exact
                d='flex'
                key={i.name}
                color='white'
                as={NavLink}
                fontWeight='bold'
                lineHeight='19px'
                alignItems='center'
                _focus={{ textDecor: 'none' }}
              >
                <Avatar size='sm' bgColor={i.color} name={i.name} />
                <Text ml={3} fontSize='xs'>
                  {i.name}
                </Text>
              </Link>
            ))}
          </Flex>
          <Text
            py={3}
            fontSize='xs'
            cursor='pointer'
            textColor='gray.400'
            _hover={{ textDecor: 'underline' }}
          >
            See all team member
          </Text>
        </Flex>
        <Flex
          p={10}
          zIndex={10}
          color='white'
          fontSize='sm'
          pos='relative'
          direction='column'
          justifyContent='center'
        >
          <Text textAlign='center' fontFamily='heading' fontWeight='bold'>
            Invite your team and start collaborating!
          </Text>
          <Box my={4}>
            <Image
              mx='auto'
              src={AIllustration}
              alt='Zeedas announcement illustration'
            />
          </Box>
          <Button
            py={6}
            variant='outline'
            fontSize='sm'
            _hover={{
              bgColor: 'zd-blue.200',
              borderColor: 'zd-blue.200'
            }}
          >
            Invite to zeedas
          </Button>
        </Flex>
        <Box pos='relative'>
          <Image
            mx='auto'
            pos='absolute'
            bottom='0'
            right='-75px'
            src={BackgroundLogo}
            alt='Zeedas background Logo'
          />
        </Box>
      </Flex>
    </Flex>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Sidebar
