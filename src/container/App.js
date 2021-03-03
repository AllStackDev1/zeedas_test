import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { AppContextProvider } from 'context/app'
import Wrapper from './Layout/Wrapper'
import Router from 'routes/register'
import { theme } from 'theme'

function App() {
  return (
    <AppContextProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Wrapper>
            <Router />
          </Wrapper>
        </BrowserRouter>
      </ChakraProvider>
    </AppContextProvider>
  )
}

export default App
