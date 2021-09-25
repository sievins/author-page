import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import ContentHeightContext from "./content-height-context";
import App from "./app";
import { useWindowSize } from "./hooks";

export default function Providers() {
  const [contentHeight, setContentHeight] = useState(null);
  const [topBarHeight, setTopBarHeight] = useState(null);
  const size = useWindowSize();

  useLayoutEffect(() => {
    setContentHeight(size.height - topBarHeight);
  }, [size.height, topBarHeight]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ContentHeightContext.Provider value={contentHeight}>
          <App setTopBarHeight={setTopBarHeight} />
        </ContentHeightContext.Provider>
      </ThemeProvider>
    </Router>
  );
}
