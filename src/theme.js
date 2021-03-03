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
        fontFamily: '"NunitoSans", sans-serif',
        lineHeight: 'tall'
      }
    })
  },
  ...breakpoints,
  fonts: {
    heading: '"FuturaBold" ,sans-serif',
    display: '"NunitoSansBold" ,sans-serif',
    light: '"WorkSans" ,sans-serif'
  },
  colors: {
    zd: {
      body: '#F3F3F3',
      800: '#052231',
      100: '#FBFBFB'
    },
    'zd-blue': {
      200: '#23B3E8'
    },
    'zd-border': 'rgba(249, 249, 249, 0.1)'
  }
})
