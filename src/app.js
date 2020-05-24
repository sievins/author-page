import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'
import Menu from './menu'
import Avatar from './avatar'
import Corners from './corners'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#f2f2f2',
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
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
        <Avatar />
        <Corners />
      </ThemeProvider>
    </div>
  )
}

export default App
