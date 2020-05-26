import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import src from '../assets/images/avatar.png'
import { useStyles } from '../hooks'

const useMuiStyles = makeStyles((theme) => ({
  avatar: ({ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen }) => {
    const size =
      isLargeScreen || isMediumScreen ? 25 :
      isSmallScreen ? 22 : 15

    const margin = isExtraSmallScreen ? 2 : 4

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
