import { Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <Spinner
      size='sm'
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='zd-blue.500'
    />
  )
}

export default LoadingSpinner
