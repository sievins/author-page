import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import src from '../../../../assets/images/avatar.png'
import { useStyles, useScreenSize, useOrientation } from '../../../../hooks'
import ContentHeightContext from '../../../../content-height-context'

const getMarginTop = ({ size, contentHeight, isPortrait }) => (
  isPortrait
    ? null
    : (contentHeight - size) / 2
)

const getSize = ({ isSmallScreen, isMediumScreen, isLargeScreen, isPortrait }) => (
  isMediumScreen && isPortrait ? 35.5 : // iPad Pro
  isSmallScreen && isPortrait ? 34 : // iPad
  isLargeScreen ? 35.5 :
  isMediumScreen ? 34 :
  isSmallScreen ? 25 : 20
)

const useMuiStyles = makeStyles((theme) => ({
  avatar: ({ isSmallScreen, isMediumScreen, isLargeScreen, isPortrait }) => {
    const size = getSize({ isSmallScreen, isMediumScreen, isLargeScreen, isPortrait })
    const alignSelf = isPortrait ? 'center' : 'unset'
    const margin = isPortrait ? 5 : 0

    return {
      alignSelf,
      width: theme.spacing(size),
      height: theme.spacing(size),
      marginTop: theme.spacing(margin),
      marginBottom: theme.spacing(margin),
      maxWidth: '100%',
    }
  },
}))

export default function Avatar() {
  const classes = useStyles(useMuiStyles)
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize()
  const { isPortrait } = useOrientation()
  const theme = useTheme()

  const size = theme.spacing(getSize({ isSmallScreen, isMediumScreen, isLargeScreen, isPortrait }))

  return (
    <ContentHeightContext.Consumer>
      {contentHeight => (
        <MuiAvatar
          alt="Alice"
          src={src}
          className={classes.avatar}
          style={{ marginTop: getMarginTop({ size, contentHeight, isPortrait }) }}
        />
      )}
    </ContentHeightContext.Consumer>
  )
}
