import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Avatar from './avatar'
import Corners from './corners'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#e2e4e9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#282c34',
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Avatar />
      <Corners />
    </div>
  )
}

export default App
