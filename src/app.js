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
    title: null,
    activeIndex: 0,
  },
  christianBooks: {
    text: 'Christian Books',
    title: 'Christian Fiction',
    activeIndex: 1,
  },
  fantasyBooks: {
    text: 'Fantasy Books',
    title: 'Young Adult Fantasy',
    activeIndex: 2,
  },
  aboutAlice: {
    text: 'About Alice',
    title: 'Alice Ivinya & Alice Gent',
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
