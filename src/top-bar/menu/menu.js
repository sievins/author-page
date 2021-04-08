import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { useStyles, useScreenSize } from "../../hooks";
import { menuHeight } from "../styles";
import { getItem, items } from "../../services/storage";

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
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default function Menu({ tabs, activeTab, setActiveTab }) {
  const classes = useStyles(useMuiStyles);
  const { isExtraSmallScreen, isSmallScreen, isLargeScreen } = useScreenSize();

  const isSubscribedToNewsletter = getItem(items.isSubscribedToNewsletter);
  const showNewsletterButton =
    !isExtraSmallScreen && !isSmallScreen && !isSubscribedToNewsletter;
  const newsletterText = isLargeScreen
    ? "Subscribe to newsletter"
    : "Newsletter";

  const handleChange = (event, tab) => {
    setActiveTab(tab);
  };

  const position = isExtraSmallScreen || isSmallScreen ? "static" : "fixed";

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
          variant="outlined"
          color="secondary"
          className={classes.button}
          target="_blank"
        >
          {newsletterText}
        </Button>
      )}
    </AppBar>
  );
}
