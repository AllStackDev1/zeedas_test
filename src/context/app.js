import React, { useContext, createContext } from 'react'
import PropTypes from 'prop-types'

import { useToggle } from 'react-use'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, toggleSidebar] = useToggle(false)

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useApp = () => useContext(AppContext)

export default useApp
