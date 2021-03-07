import { Box, Text } from '@chakra-ui/react'

import useSetAppProps from 'hooks/useSetAppProps'

const Dashboard = props => {
  useSetAppProps(props)

  return (
    <Box py={{ lg: 10 }} px={{ lg: 32 }}>
      <Text>This is the dashboard</Text>
    </Box>
  )
}

export default Dashboard
