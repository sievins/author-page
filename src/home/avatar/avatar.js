import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import src from '../../assets/images/avatar.png'
import { useStyles } from '../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  avatar: ({ isSmallScreen, isMediumScreen, isLargeScreen, isPortrait }) => {
    const size =
      isMediumScreen && isPortrait ? 35.5 : // iPad Pro
      isSmallScreen && isPortrait ? 34 : // iPad
      isLargeScreen ? 35.5 :
      isMediumScreen ? 34 :
      isSmallScreen ? 25 : 20

    const margin = isPortrait ? 5 : 0

    return {
      alignSelf: 'center',
      width: theme.spacing(size),
      height: theme.spacing(size),
      marginTop: theme.spacing(margin),
      marginBottom: theme.spacing(margin),
    }
  },
}))

export default function Avatar() {
  const classes = useStyles(useMuiStyles)

  return (
    <MuiAvatar alt="Alice" src={src} className={classes.avatar} />
  )
}
