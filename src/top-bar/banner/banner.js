import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../hooks'
import banner from '../../assets/images/banner.jpg'

const useMuiStyles = makeStyles({
  image: ({ isExtraSmallScreen, isSmallScreen, isLandscape }) => ({
    width: '100%',
    height: isLandscape ? '29vh' : '25vh',
    display: (
      isExtraSmallScreen || isSmallScreen
        ? 'none'
        : 'initial'
    ),
  }),
})

export default function Banner() {
  const classes = useStyles(useMuiStyles)

  return <img src={banner} alt='banner' className={classes.image} />
}
