import React, { useMemo, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Fade, Image, Link, underlayFactory } from "../components";
import { useScreenSize, useStyles } from "../hooks";
import logo from "../assets/images/logo.png";
import fbLogo from "../assets/images/fb-logo.png";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const useMuiStyles = makeStyles({
  children: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    flexGrow: 1,
    fontSize: "calc(7px + 1.2vmin)",
  },
  image: {
    display: "flex",
    justifyContent: "center",
  },
  fbLogo: {
    cursor: "pointer",
  },
});

BottomBar.propTypes = {
  tabs: PropTypes.shape({
    home: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    contentAdvisory: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default function BottomBar({ tabs }) {
  const [focus, setFocus] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles(useMuiStyles);
  const { isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } =
    useScreenSize();

  const height = useMemo(
    () =>
      calculateHeight({
        isExtraSmallScreen,
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
      }),
    [isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen]
  );

  const logoSize = useMemo(
    () =>
      isLargeScreen ? 350 : isMediumScreen ? 250 : isSmallScreen ? 200 : 200,
    [isLargeScreen, isMediumScreen, isSmallScreen]
  );

  const isHome = useMemo(
    () =>
      Object.values(tabs).find((tab) => tab.path === location.hash).text ===
      tabs.home.text,
    [tabs, location.hash]
  );

  if (isHome) return null;

  return (
    <footer style={{ height }}>
      <Underlay classes={{ children: classes.children }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={2}>
            <Fade in={focus} opacity={0.7}>
              <Image
                alt="Facebook logo"
                src={fbLogo}
                imageDimensions={{ height: 100, width: 100 }}
                className={classes.image}
                classes={{ image: classes.fbLogo }}
                onMouseEnter={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                onClick={() =>
                  window.open("https://www.facebook.com/groups/AliceIvinya")
                }
              />
            </Fade>
          </Grid>
          {!isExtraSmallScreen && (
            <Grid item xs={12} sm={4}>
              <Image
                src={logo}
                alt="Alice Ivinya logo"
                imageDimensions={{ height: logoSize, width: logoSize }}
                className={classes.image}
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={2}
            style={{ marginTop: isExtraSmallScreen ? theme.spacing(1) : 0 }}
          >
            <Link href={tabs.contentAdvisory.path}>Content Advisory</Link>
          </Grid>
        </Grid>
      </Underlay>
    </footer>
  );
}

const calculateHeight = ({
  isExtraSmallScreen,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
}) =>
  isLargeScreen
    ? "400px"
    : isMediumScreen
    ? "300px"
    : isSmallScreen
    ? "250px"
    : isExtraSmallScreen
    ? "200px"
    : "200px";

const Underlay = underlayFactory(calculateHeight);
