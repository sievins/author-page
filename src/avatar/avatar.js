import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import src from '../assets/images/avatar.png'
import { useStyles } from '../hooks'

const stylesDelegate = (theme) => ({
  avatar: ({ isSmallScreen }) => ({
    alignSelf: 'center',
    width: isSmallScreen ? theme.spacing(12) : theme.spacing(25),
    height: isSmallScreen ? theme.spacing(12) : theme.spacing(25),
    marginTop: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
    marginBottom: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
  }),
})

export default function Avatar() {
  const classes = useStyles(stylesDelegate)

  return (
    <MuiAvatar alt="Alice" src={src} className={classes.avatar} />
  )
}
