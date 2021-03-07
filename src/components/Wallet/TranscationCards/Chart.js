import { Flex, Box } from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2'

const Chart = () => {
  const data = [43, 23, 57]
  const labels = ['Transaction A', 'Transaction B', 'Transaction C']

  const customLabels = labels.map((label, index) => `${label}: ${data[index]}`)

  const chartdata = {
    labels: customLabels,
    datasets: [
      {
        data,
        backgroundColor: ['#27AE60', '#6AC895', '#FBB700'],
        hoverBackgroundColor: ['#27AE60', '#6AC895', '#FBB700']
      }
    ]
  }

  const legend = {
    display: true,
    position: 'right',
    labels: {
      padding: 20,
      boxWidth: 8,
      fontSize: 13,
      usePointStyle: true,
      fontFamily: 'WorkSans',
      fontColor: 'rgba(16,16,16,0.7)'
    }
  }

  return (
    <Flex
      p={5}
      ml={14}
      grow={1}
      border='1px'
      rounded='md'
      bgColor='white'
      borderColor='zd-border.50'
    >
      <Box pos='relative' h='150px'>
        <Doughnut
          legend={legend}
          data={chartdata}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 15
              }
            },
            responsive: true,
            cutoutPercentage: 20
          }}
        />
      </Box>
    </Flex>
  )
}

export default Chart
