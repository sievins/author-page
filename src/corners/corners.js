import React from 'react'
import Grid from '@material-ui/core/Grid'
import Corner from './corner'
import { useStyles } from '../hooks'

const styles = {
  container: {
    flexGrow: 1,
  },
}

export default function Corners() {
  const classes = useStyles(styles)

  return (
    <Grid container className={classes.container}>
      <Corner title="Christian Corner" authorName="Alice Gent" />
      <Corner title="Fantasy Corner" authorName="Alice Ivinya" />
    </Grid>
  )
}
