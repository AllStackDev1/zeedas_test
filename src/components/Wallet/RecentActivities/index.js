import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import TableItem from './TableItem'

const RecentActivities = () => {
  const data = [
    {
      id: 1,
      title: 'Adam - 08125378900',
      type: 'withdraw',
      amount: '₦ 12,000',
      time: '20 mins ago'
    },
    {
      id: 2,
      to: '2 recipients',
      type: 'transfer',
      amount: '₦ 12,000',
      time: '45 mins ago'
    },
    {
      id: 3,
      to: 'James - 08125378900',
      type: 'transfer',
      amount: '₦ 10,000',
      time: '1 hour ago'
    },
    {
      id: 4,
      title: 'James - 08125378900',
      type: 'withdraw',
      amount: '₦ 10,000',
      time: '2 hour ago'
    },
    {
      id: 5,
      type: 'topup',
      amount: '₦ 50,000',
      time: '1 day ago'
    }
  ]

  return (
    <Box py={8}>
      <Flex justifyContent='space-between'>
        <Text fontFamily='heading' fontSize='xl'>
          Recent Activities
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
      <Box
        mt={2}
        px={6}
        h={80}
        border='1px'
        rounded='md'
        bgColor='white'
        overflow='scroll'
        shadow='bottomInner'
        borderColor='zd-border.50'
      >
        {data.map((item, index) => (
          <TableItem key={item.id} idx={index} len={data.length} {...item} />
        ))}
      </Box>
    </Box>
  )
}

export default RecentActivities
