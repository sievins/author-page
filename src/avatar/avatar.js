import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import src from '../assets/images/avatar.png'
import { useStyles } from '../hooks'

const useMuiStyles = makeStyles((theme) => ({
  avatar: ({ isSmallScreen }) => ({
    alignSelf: 'center',
    width: isSmallScreen ? theme.spacing(12) : theme.spacing(25),
    height: isSmallScreen ? theme.spacing(12) : theme.spacing(25),
    marginTop: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
    marginBottom: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
  }),
}))

export default function Avatar() {
  const classes = useStyles(useMuiStyles)

  return (
    <MuiAvatar alt="Alice" src={src} className={classes.avatar} />
  )
}
