import React, { useState, useLayoutEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import ContentHeightContext from './content-height-context'
import theme from './theme'
import TopBar from './top-bar'
import Routes from './routes'
import { useWindowSize } from './hooks'

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
  const [contentHeight, setContentHeight] = useState(null)
  const [topBarHeight, setTopBarHeight] = useState(null)
  const size = useWindowSize()

  useLayoutEffect(() => {
    setContentHeight(size.height - topBarHeight)
  }, [size.height, topBarHeight])

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <ContentHeightContext.Provider value={contentHeight}>
          <TopBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} setTopBarHeight={setTopBarHeight} />
          <Routes tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </ContentHeightContext.Provider>
      </ThemeProvider>
    </div>
  )
}
