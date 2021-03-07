import { useEffect } from 'react'

import useApp from 'context/app'

const useSetAppProps = props => {
  const { setAppProps } = useApp()

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setAppProps(props)
    }
    return () => (mounted = false)
  }, [props, setAppProps])

  return null
}

export default useSetAppProps
