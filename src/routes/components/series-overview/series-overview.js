import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import { useStyles } from '../../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: 'frieght-disp-bold',
    fontSize: 'calc(28px + 1.2vmin)',
    color: theme.palette.text.secondary,
  },
  text: {
    fontSize: 'calc(8px + 1.2vmin)',
    marginBottom: theme.spacing(5),
  },
}))

SeriesOverview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default function SeriesOverview({ title, paragraphs }) {
  const classes = useStyles(useMuiStyles)

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        className={classes.heading}
      >
        {title}
      </Typography>
      <Grid container direction="column" alignContent="center" className={classes.text}>
        <Grid item xs={8} md={6}>
          {
            paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}
