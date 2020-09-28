import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'
import Menu from './menu'
import Banner from './banner'
import Home from './home'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
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

export default function App() {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Menu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Banner />
        <Home tabs={tabs} setActiveTab={setActiveTab} />
      </ThemeProvider>
    </div>
  )
}
