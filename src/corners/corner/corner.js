import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import divider from '../../assets/images/divider.png'
import { useStyles } from '../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  paper: ({ isSmallScreen }) => ({
    padding: theme.spacing(2),
    width: isSmallScreen ? theme.spacing(10) : theme.spacing(60),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: 'auto',
    cursor: 'pointer',
  }),
  h1: {
    fontFamily: 'intro-script',
    fontSize: 'xx-large',
  },
  h2: {
    fontFamily: 'intro-script',
    fontSize: 'x-large',
  },
  divider: {
    width: 'inherit',
    marginBottom: '-36px',
  },
}))

export default function Corner({ title, authorName }) {
  const [elevation, setElevation] = useState(1)
  const classes = useStyles(useMuiStyles)

  return (
    <Grid item xs={6}>
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
    </Grid>
  )
}

Corner.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
}

