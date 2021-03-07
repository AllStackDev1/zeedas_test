import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Link, Box, Fade, Text, Icon } from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'

const DrowdownMenu = ({ menus, isOpen }) => {
  const drowpdownMenuItems = [
    ...menus,
    {
      name: 'logout',
      icon: FiLogOut,
      color: 'red',
      action: () => {}
    }
  ]

  return (
    <Fade initialScale={0.9} in={isOpen}>
      <Box
        pos='absolute'
        transformOrigin='top right'
        zIndex={40}
        rounded='md'
        shadow='lg'
        right={16}
        w={48}
        mt={8}
      >
        <Box
          bgColor='white'
          shadow='xs'
          rounded='md'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          {drowpdownMenuItems.map(e => {
            const color = e.color || 'gray'
            return (
              <Box key={e.name}>
                <Link
                  px={4}
                  py={3}
                  d='flex'
                  as={NavLink}
                  fontSize='sm'
                  lineHeight='5'
                  role='menuitem'
                  to={e.link || '#'}
                  onClick={e.action}
                  alignItems='center'
                  color={color + '.700'}
                  _hover={{
                    color: 'white',
                    bgColor: 'zd-blue.500'
                  }}
                  _focus={{
                    outline: 'none',
                    bgColor: color + '.100'
                  }}
                >
                  {e.icon && <Icon as={e.icon} boxSize={4} />}
                  <Text ml={2}>{e.name}</Text>
                </Link>
                <Box borderTop='1px' borderTopColor='gray.100'></Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Fade>
  )
}

DrowdownMenu.propTypes = {
  menus: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default DrowdownMenu
