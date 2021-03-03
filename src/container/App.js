import { ChakraProvider } from '@chakra-ui/react'

// Context
import { AppContextProvider } from 'context/app'

// routes
import Router from 'routes/register'

function App() {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </AppContextProvider>
  )
}

export default App
