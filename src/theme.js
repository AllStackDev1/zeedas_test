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
  }
})
