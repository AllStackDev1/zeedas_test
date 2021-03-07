import { extendTheme } from '@chakra-ui/react'

const breakpoints = ['30em', '48em', '62em', '80em']
// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: 'md',
        fontFamily: 'NunitoSans, sans-serif'
      }
    })
  },
  ...breakpoints,
  fonts: {
    heading: 'Futura,sans-serif',
    display: 'NunitoSansBold,sans-serif',
    light: 'WorkSans,sans-serif'
  },
  colors: {
    zd: {
      body: '#F3F3F3',
      800: '#052231',
      400: 'rgba(45, 45, 45, 0.5)',
      100: '#FBFBFB'
    },
    'zd-blue': '#23B3E8',
    'zd-orange': '#F15832',
    'zd-border': {
      50: 'rgba(16,16,16,0.2)',
      100: 'rgba(249,249,249,0.1)',
      200: 'rgba(45,45,45,0.1)'
    }
  }
})
