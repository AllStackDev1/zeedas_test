import React, { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import { useDisclosure } from '@chakra-ui/react'

import { FiHome, FiGitPullRequest, FiUsers } from 'react-icons/fi'
import { IoWalletOutline } from 'react-icons/io5'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarState] = useState(false)
  const {
    isOpen: isTopbarDropdownOpen,
    onToggle: toggleTopbarDropdown
  } = useDisclosure()

  const menus = [
    { name: 'Overview', link: '/', icon: FiHome },
    { name: 'Projects', link: '/', icon: FiGitPullRequest },
    { name: 'Tasks', link: '/', icon: FiUsers },
    { name: 'Wallet', link: '/', icon: IoWalletOutline, active: true }
  ]

  const toggleSidebar = () => setSidebarState(!isSidebarOpen)

  return (
    <AppContext.Provider
      value={{
        menus,
        isSidebarOpen,
        toggleSidebar,
        toggleTopbarDropdown,
        isTopbarDropdownOpen
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
