import { Flex, Icon, Text } from '@chakra-ui/react'
import { TransactionIcon } from 'assets/icons'

const Total = () => {
  return (
    <Flex
      p={5}
      w={56}
      rounded='md'
      color='white'
      direction='column'
      bgColor='zd-orange'
      justifyContent='space-between'
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Icon as={TransactionIcon} boxSize={6} />
        <Text fontFamily='heading' fontWeight='bold' fontSize='3xl'>
          56
        </Text>
      </Flex>
      <Text w={{ md: 28, lg: 'full' }} fontWeight='bold' fontSize='lg'>
        Total Transaction
      </Text>
    </Flex>
  )
}

export default Total
