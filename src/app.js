import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import NewsletterSnackbar from "./newsletter-snackbar";
import TopBar from "./top-bar";
import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.palette.background.light,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "calc(10px + 1.2vmin)",
    lineHeight: "26px",
    textAlign: "center",
    textRendering: "optimizeLegibility",
    color: theme.palette.text.primary,
  },
}));

const preserveWhiteSpace = (string) => (
  <span style={{ whiteSpace: "pre" }}>{string}</span>
);

const tabs = {
  home: {
    path: "",
    text: "Home",
    title: null,
    activeIndex: 0,
  },
  christianBooks: {
    path: "#/christian",
    text: "Christian Books",
    title: preserveWhiteSpace("Christian  Fiction"),
    activeIndex: 1,
  },
  fantasyBooks: {
    path: "#/fantasy",
    text: "Fantasy Books",
    title: preserveWhiteSpace("Young  Adult  Fantasy"),
    activeIndex: 2,
  },
  aboutAlice: {
    path: "#/about",
    text: "About Alice",
    title: preserveWhiteSpace("Alice  Ivinya    - & -    Alice  Gent"),
    activeIndex: 3,
  },
};

App.propTypes = {
  setTopBarHeight: PropTypes.func.isRequired,
};

export default function App({ setTopBarHeight }) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <NewsletterSnackbar />
      <TopBar tabs={tabs} setTopBarHeight={setTopBarHeight} />
      <Routes tabs={tabs} />
    </div>
  );
}
