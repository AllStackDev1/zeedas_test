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

import useApp from 'context/app'

import { FiPlus } from 'react-icons/fi'
import { Logo, AIllustration, BackgroundLogo } from 'assets/images'

const Sidebar = () => {
  const { menus, appProps } = useApp()

  const currentPath = appProps?.location?.pathname

  const myTeam = [
    { name: 'Prince Natterbase', color: '#23B3E8' },
    { name: 'Jerry ibea', color: '#4DBD98' },
    { name: 'Lois Genesis', color: '#3D43A2' },
    { name: 'Andrew Wams', color: '#F15832' }
  ]

  return (
    <Flex w={{ md: '22.5rem' }} h='100vh' bgColor='zd.800' direction='column'>
      <Flex h='100%' direction='column' overflowY='auto' pos='relative'>
        <Flex
          h={28}
          pl={8}
          borderBottom='1px'
          borderBottomColor='zd-border.100'
        >
          <Image src={Logo} w={{ md: '10rem' }} alt='Zeedas logo' />
        </Flex>
        <Flex as='nav' borderBottom='1px' borderBottomColor='zd-border.100'>
          <Flex as='ul' direction='column' w='100%' p={10}>
            {menus.map(i => (
              <Link
                pb={4}
                exact
                d='flex'
                key={i.name}
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
                  color='white'
                  bgColor={currentPath === i.link ? 'zd-blue' : ''}
                  borderRadius='10px'
                >
                  <Icon as={i.icon} boxSize={6} />
                </Box>
                <Text
                  ml={3}
                  color={currentPath === i.link ? 'zd-blue' : 'white'}
                  _hover={{ color: 'zd-blue' }}
                >
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
          borderBottomColor='zd-border.100'
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
              bgColor: 'zd-blue',
              borderColor: 'zd-blue'
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

export default Sidebar
