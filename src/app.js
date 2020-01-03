import React from 'react';
import Avatar from './avatar'
import { useStyles } from './hooks'

const styles = {
  app: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#f1f2f4',
  }
}

function App() {
  const classes = useStyles(styles)

  return (
    <div className={classes.app}>
      <Avatar />
    </div>
  )
}

export default App
