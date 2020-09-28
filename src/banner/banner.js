import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useScreenSize, useStyles } from '../hooks'
import banner from '../assets/images/banner.jpg'

const useMuiStyles = makeStyles({
  image: ({ isLandscape }) => ({
    width: '100%',
    height: isLandscape ? '30vh' : '25vh',
  }),
})

export default function Banner() {
  const classes = useStyles(useMuiStyles)
  const { isExtraSmallScreen, isSmallScreen } = useScreenSize()

  return isExtraSmallScreen || isSmallScreen
    ? null
    : <img src={banner} alt='banner' className={classes.image} />
}
