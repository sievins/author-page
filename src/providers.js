import React, { useLayoutEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import ContentHeightContext from './content-height-context'
import App from './app'
import { useWindowSize } from './hooks'

export default function Providers() {
  const [contentHeight, setContentHeight] = useState(null)
  const [topBarHeight, setTopBarHeight] = useState(null)
  const size = useWindowSize()

  useLayoutEffect(() => {
    setContentHeight(size.height - topBarHeight)
  }, [size.height, topBarHeight])

  return (
    <ThemeProvider theme={theme}>
      <ContentHeightContext.Provider value={contentHeight}>
        <App setTopBarHeight={setTopBarHeight} />
      </ContentHeightContext.Provider>
    </ThemeProvider>
  )
}
