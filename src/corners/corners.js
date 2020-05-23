import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Corner from './corner'

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
})

export default function Corners() {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Corner title="Christian Corner" authorName="Alice Gent" />
      <Corner title="Fantasy Corner" authorName="Alice Ivinya" />
    </Grid>
  )
}
