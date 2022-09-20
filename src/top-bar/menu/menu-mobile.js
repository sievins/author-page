import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  list: {
    width: 250,
  },
  font: {
    fontFamily: "frieght-disp-bold",
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
  },
  newsletter: {
    color: theme.palette.secondary.main,
  },
}));

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

MenuMobile.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
    aboutAlice: tabPropType,
  }).isRequired,
};

export default function MenuMobile({ tabs }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const { activeIndex, text } = Object.values(tabs).find(
    (tab) => tab.path === location.hash
  );

  const toggleDrawer = (toggle) => () => {
    setOpen(toggle);
  };

  const Item = ({ primary, tabIndex }) => (
    <ListItem
      button
      className={clsx(activeIndex === tabIndex && classes.selected)}
      onClick={() => {
        const path = Object.values(tabs).find(
          (tab) => tab.activeIndex === tabIndex
        ).path;
        history.push(path);
      }}
    >
      <ListItemText primary={primary} classes={{ primary: classes.font }} />
    </ListItem>
  );

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <Item primary="Fantasy Books" tabIndex={1} />
        <Item primary="Christian Books" tabIndex={2} />
        <Item primary="About" tabIndex={3} />
        <Divider />
        <ListItem
          button
          onClick={() =>
            window.open("https://sendfox.com/AliceIvinya", "_blank")
          }
        >
          <ListItemText
            primary="Newsletter"
            className={classes.newsletter}
            classes={{ primary: classes.font }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" classes={{ root: classes.font }}>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </Fragment>
  );
}
