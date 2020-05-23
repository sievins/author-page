import useScreenSize from './use-screen-size'

export default function useStyles(useMuiStyles) {
  const isSmallScreen = useScreenSize()
  const classes = useMuiStyles({ isSmallScreen })
  return classes
}
