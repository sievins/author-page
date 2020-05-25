import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function useScreenSize() {
  const theme = useTheme()
  const isLessThanExtraSmall = useMediaQuery(theme.breakpoints.down('xs'))
  const isLessThanSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isLessThanMedium = useMediaQuery(theme.breakpoints.down('md'))
  const isLessThanLarge = useMediaQuery(theme.breakpoints.down('lg'))

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
