import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

import { WalletIcon, CreditCardIcon } from 'assets/icons'

const Balance = () => {
  return (
    <Flex
      pb={4}
      alignItems='center'
      borderBottom='1px dashed'
      borderBottomColor='zd-border.50'
      justifyContent='space-between'
    >
      <Box>
        <Text fontWeight='bold' textColor='gray.500'>
          Wallet Balance
        </Text>
        <Flex direction='column'>
          <Flex>
            <Text
              as='span'
              fontSize='38px'
              fontWeight='500'
              textColor='gray.400'
              fontFamily='WorkSans'
            >
              $
            </Text>
            <Text fontFamily='heading' fontWeight='bold' fontSize='40px'>
              12,550.50
            </Text>
          </Flex>
          <Flex mt={3} fontSize='xs'>
            <Box>
              <Text as='span'>Subscription Price</Text>
              <Text as='span' color='green.400' fontSize='sm' ml={2}>
                $15
              </Text>
            </Box>
            <Box
              h={6}
              mx={8}
              borderLeft='1px'
              borderLeftColor='zd-border.200'
            />
            <Box>
              <Text as='span'>Last funded</Text>
              <Text as='span' ml={2} color='zd-blue'>
                2 days ago
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box w='44'>
        <Button
          py={1}
          mb={3}
          w='100%'
          color='white'
          fontSize='sm'
          _hover={{
            bgColor: 'zd-blue'
          }}
          justifyContent='space-between'
          bgColor='zd-blue'
          leftIcon={<WalletIcon w='22px' h='20px' />}
          rightIcon={<FiChevronRight />}
        >
          Fund Wallet
        </Button>
        <Button
          py={1}
          w='100%'
          fontSize='sm'
          color='white'
          bgColor='zd.800'
          _hover={{
            bgColor: 'zd.800'
          }}
          justifyContent='space-between'
          leftIcon={<CreditCardIcon w='22px' h='20px' />}
          rightIcon={<FiChevronRight />}
        >
          Add Card
        </Button>
      </Box>
    </Flex>
  )
}

export default Balance
