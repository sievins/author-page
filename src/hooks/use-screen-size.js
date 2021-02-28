import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useMediaQueryNoSsr = (mediaQuery) => useMediaQuery(mediaQuery, { noSsr: true })

export default function useScreenSize() {
  const theme = useTheme()
  const isLessThanExtraSmall = useMediaQueryNoSsr(theme.breakpoints.down('xs'))
  const isLessThanSmall = useMediaQueryNoSsr(theme.breakpoints.down('sm'))
  const isLessThanMedium = useMediaQueryNoSsr(theme.breakpoints.down('md'))
  const isLessThanLarge = useMediaQueryNoSsr(theme.breakpoints.down('lg'))

  const isExtraSmallScreen = isLessThanExtraSmall
  const isSmallScreen = isLessThanSmall && !isLessThanExtraSmall
  const isMediumScreen = isLessThanMedium && !isLessThanSmall
  const isLargeScreen = isLessThanLarge && !isLessThanMedium

  return {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  }
}
