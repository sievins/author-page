import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Corner from './corner'
import { useStyles } from '../hooks'

const useMuiStyles = makeStyles({
  container: ({ isExtraSmallScreen }) => ({
    flexGrow: 1,
    flexDirection: isExtraSmallScreen && 'column',
  }),
})

export default function Corners() {
  const classes = useStyles(useMuiStyles)

  return (
    <Grid container className={classes.container}>
      <Corner title="Christian Corner" authorName="Alice Gent" />
      <Corner title="Fantasy Corner" authorName="Alice Ivinya" />
    </Grid>
  )
}
