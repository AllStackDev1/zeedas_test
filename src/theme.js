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
    display: 'NunitoSansBold,sans-serif'
  },
  colors: {
    zd: {
      body: '#F3F3F3',
      100: '#FBFBFB',
      800: '#052231',
      400: 'rgba(45,45,45,0.5)'
    },
    'zd-blue': {
      100: 'rgba(35,179,232,0.2)',
      500: '#23B3E8'
    },
    'zd-orange': {
      100: '#F15832',
      500: '#F15832'
    },
    'zd-green': {
      100: 'rgba(77,189,152,0.2)',
      500: '#4DBD98'
    },
    'zd-yellow': {
      100: 'rgba(251,183,0,0.2)',
      500: 'rgba(251,183,0,1)'
    },
    'zd-border': {
      50: 'rgba(16,16,16,0.1)',
      100: 'rgba(249,249,249,0.1)',
      200: 'rgba(45,45,45,0.1)'
    }
  },
  shadows: {
    bottomInner: 'inset -3px -30px 10px -14px rgba(224,224,224,0.65);'
  }
})
