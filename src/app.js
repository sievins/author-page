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

const tabs = {
  home: {
    text: 'Home',
    activeIndex: 0,
  },
  christianCorner: {
    text: 'Christian Corner',
    activeIndex: 1,
  },
  fantasyCorner: {
    text: 'Fantasy Corner',
    activeIndex: 2,
  },
  aboutAlice: {
    text: 'About Alice',
    activeIndex: 3,
  },
}

function App() {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Menu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Avatar />
        <Corners tabs={tabs} setActiveTab={setActiveTab} />
      </ThemeProvider>
    </div>
  )
}

export default App
