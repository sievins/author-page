import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { useStyles, useScreenSize } from "../../hooks";
import { menuHeight } from "../styles";

const useMuiStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "white",
    height: menuHeight,
    opacity: 0.9,
  },
  home: {
    display: "none",
  },
  tab: ({ isLargeScreen }) => {
    const width = isLargeScreen ? 40 : 25;
    return {
      width: theme.spacing(width),
      maxWidth: theme.spacing(width),
      fontFamily: "frieght-disp-bold",
    };
  },
  button: {
    fontFamily: "frieght-disp-bold",
    top: -42.2,
    marginLeft: "auto",
    marginRight: 5.8,
  },
}));

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

Menu.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
    aboutAlice: tabPropType,
  }).isRequired,
};

export default function Menu({ tabs }) {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles(useMuiStyles);
  const { isExtraSmallScreen, isSmallScreen, isLargeScreen } = useScreenSize();

  const showNewsletterButton = !isExtraSmallScreen && !isSmallScreen;
  const newsletterText = isLargeScreen
    ? "Subscribe to newsletter"
    : "Newsletter";

  const handleChange = (event, activeIndex) => {
    const path = Object.values(tabs).find(
      (tab) => tab.activeIndex === activeIndex
    ).path;
    history.push(path);
  };

  const position = isExtraSmallScreen || isSmallScreen ? "static" : "fixed";

  const activeTab = Object.values(tabs).find(
    (tab) => tab.path === location.hash
  ).activeIndex;

  return (
    <AppBar position={position} className={classes.bar}>
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label={tabs.home.text} className={classes.home} />
        <Tab label={tabs.christianBooks.text} className={classes.tab} />
        <Tab label={tabs.fantasyBooks.text} className={classes.tab} />
        <Tab label={tabs.aboutAlice.text} className={classes.tab} />
      </Tabs>
      {showNewsletterButton && (
        <Button
          href="https://sendfox.com/AliceIvinya"
          target="_blank"
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          {newsletterText}
        </Button>
      )}
    </AppBar>
  );
}
