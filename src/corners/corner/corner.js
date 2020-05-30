import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import divider from '../../assets/images/divider.png'
import { useStyles } from '../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: ({ isExtraSmallScreen }) => ({
    margin: '0 auto',
    marginBottom: isExtraSmallScreen && theme.spacing(2),
  }),
  paper: ({ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen }) => {
    const width =
      isLargeScreen ? 60 :
      isMediumScreen ? 48 :
      isSmallScreen ? 30 :
      isExtraSmallScreen ? 28 : 28

    return {
      padding: theme.spacing(2),
      width: theme.spacing(width),
      textAlign: 'center',
      color: theme.palette.text.primary,
      margin: 'auto',
      cursor: 'pointer',
    }
  },
  h1: {
    fontFamily: 'belepotan-italic',
    fontSize: 'x-large',
  },
  h2: {
    fontFamily: 'intro-script',
    fontSize: 'x-large',
  },
  divider: ({ isSmallScreen, isMediumScreen, isLargeScreen }) => {
    const marginBottom =
      isLargeScreen ? -36 :
      isMediumScreen ? -30 :
      isSmallScreen ? -14 : -16

    return {
      width: 'inherit',
      marginBottom,
    }
  },
}))

export default function Corner({ title, authorName }) {
  const [elevation, setElevation] = useState(1)
  const classes = useStyles(useMuiStyles)

  return (
    <Grid item xs={12} sm={6} className={classes.grid}>
      <ButtonBase className={classes.button}>
        <Paper
          elevation={elevation}
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(1)}
          className={classes.paper}
        >
          <Typography variant="h1" component="h1" className={classes.h1}>
            {title}
          </Typography>
          <img src={divider} alt="divider" className={classes.divider} />
          <Typography variant="h2" component="h2" className={classes.h2}>
            {authorName}
          </Typography>
        </Paper>
      </ButtonBase>
    </Grid>
  )
}

Corner.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
}

