import useScreenSize from './use-screen-size'

export default function useStyles(useMuiStyles) {
  const { isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize()
  const classes = useMuiStyles({ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen })
  return classes
}
