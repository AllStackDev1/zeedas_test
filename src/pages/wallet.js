import { Flex, Box, Icon, Text, Image } from '@chakra-ui/react'
import useSetAppProps from 'hooks/useSetAppProps'
import { Balance, TranscationCards, RecentActivities } from 'components/Wallet'

import { FiChevronRight } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'
import { AiFillInfoCircle } from 'react-icons/ai'
import { CycleIcon, DollarIcon } from 'assets/icons'
import { Card } from 'assets/images'

const Wallet = props => {
  useSetAppProps(props)

  return (
    <Flex py={{ lg: 10 }} px={{ lg: 32 }} justifyContent='space-between'>
      <Box w='63%'>
        <Balance />
        <TranscationCards />
        <RecentActivities />
      </Box>
      <Box w='34%'>
        <Box
          py={5}
          rounded='md'
          border='1px'
          pos='relative'
          bgColor='white'
          boxShadow='base'
          borderColor='zd-border.50'
        >
          <Box
            top={3}
            right={2}
            pos='absolute'
            cursor='pointer'
            color='zd-orange.500'
          >
            <Icon as={IoCloseOutline} boxSize={6} />
          </Box>
          <Box mt={3} borderBottom='1px' borderBottomColor='zd-border.50'>
            <Box px={7}>
              <Box pb={2} borderBottom='1px' borderBottomColor='zd-border.50'>
                <Text
                  fontFamily='WorkSans'
                  textColor='gray.500'
                  fontWeight='500'
                  fontSize='sm'
                >
                  Referrals
                </Text>
              </Box>
              <Flex my={4} alignItems='center' justifyContent='space-between'>
                <Text
                  fontSize='13px'
                  fontWeight='600'
                  textColor='gray.400'
                  w={{ md: 40, lg: 60, xl: 72 }}
                >
                  Click on the button below to enter email address of who you
                  are refereing
                </Text>
                <Icon as={AiFillInfoCircle} boxSize={5} />
              </Flex>
              <Flex
                my={5}
                cursor='pointer'
                _hover={{
                  textDecor: 'underline'
                }}
                color='zd-orange.500'
                alignItems='center'
                justifyContent='space-between'
              >
                <Text fontSize='sm' fontWeight='bold'>
                  Refer your friends
                </Text>
                <Icon as={FiChevronRight} />
              </Flex>
            </Box>
          </Box>
          <Box mt={8} borderBottom='1px' borderBottomColor='zd-border.50'>
            <Box px={7}>
              <Text
                fontFamily='WorkSans'
                textColor='gray.500'
                fontWeight='500'
                fontSize='sm'
              >
                Billing notice
              </Text>
              <Box my={4}>
                <Flex
                  p={5}
                  rounded='2xl'
                  alignItems='center'
                  bgColor='zd-blue.50'
                  justifyContent='space-between'
                >
                  <Flex
                    p={4}
                    rounded='full'
                    alignItems='center'
                    bgColor='zd-blue.100'
                    justifyContent='space-between'
                  >
                    <Icon as={CycleIcon} boxSize={6} />
                  </Flex>
                  <Flex direction='column' w='70%' fontFamily='WorkSans'>
                    <Text fontSize='xs' fontWeight='500' textColor='gray.600'>
                      Next Billing circle
                    </Text>
                    <Text fontSize='lg' fontWeight='600'>
                      25/June/2020
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box my={4}>
                <Flex
                  p={5}
                  rounded='2xl'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Flex
                    p={4}
                    rounded='full'
                    alignItems='center'
                    bgColor='zd-blue.100'
                    justifyContent='space-between'
                  >
                    <Icon as={DollarIcon} boxSize={6} />
                  </Flex>
                  <Flex direction='column' w='70%' fontFamily='WorkSans'>
                    <Text fontSize='xs' fontWeight='500' textColor='gray.600'>
                      Billing Amount
                    </Text>
                    <Text fontSize='lg' fontWeight='600'>
                      $1000.00
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box mt={8}>
            <Box px={7}>
              <Flex justifyContent='space-between' fontSize='sm'>
                <Text textColor='gray.500' fontFamily='WorkSans'>
                  Saved Cards
                </Text>
                <Flex
                  as='a'
                  href='#'
                  fontSize='sm'
                  cursor='pointer'
                  fontWeight='bold'
                  alignItems='center'
                  _hover={{
                    textDecor: 'underline'
                  }}
                  color='zd-orange.500'
                >
                  <Text>See all</Text>
                  <Icon as={FiChevronRight} />
                </Flex>
              </Flex>
              <Image src={Card} alt='card' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Wallet
