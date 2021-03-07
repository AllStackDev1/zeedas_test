import { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import { useDisclosure } from '@chakra-ui/react'

import { FiHome, FiGitPullRequest, FiUsers } from 'react-icons/fi'
import { WalletIcon } from 'assets/icons'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [appProps, setAppProps] = useState({})
  const { isOpen: isSidebarOpen, onToggle: toggleSidebar } = useDisclosure()
  const {
    isOpen: isTopbarDropdownOpen,
    onToggle: toggleTopbarDropdown
  } = useDisclosure()

  const menus = [
    { name: 'Overview', link: '/', icon: FiHome },
    { name: 'Projects', link: '/', icon: FiGitPullRequest },
    { name: 'Tasks', link: '/', icon: FiUsers },
    { name: 'Wallet', link: '/wallet', icon: WalletIcon }
  ]

  return (
    <AppContext.Provider
      value={{
        menus,
        appProps,
        setAppProps,
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
