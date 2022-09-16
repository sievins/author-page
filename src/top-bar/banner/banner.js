import React, { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useOrientation, useScreenSize, useStyles } from "../../hooks";
import { menuHeight } from "../styles";
import banner from "../../assets/images/banner.jpg";

const calculateBannerHeight = ({ isLandscape, isLargeScreen }) =>
  isLandscape ? (isLargeScreen ? "33vh" : "26vh") : "20vh";

const useMuiStyles = makeStyles((theme) => ({
  container: ({ isExtraSmallScreen, isSmallScreen }) => ({
    display: isExtraSmallScreen || isSmallScreen ? "none" : "flex",
    justifyContent: "center",
  }),
  heading: {
    position: "absolute",
    fontFamily: "frieght-disp-bold",
    fontSize: "xx-large",
    color: theme.palette.text.secondary,
  },
  banner: (props) => ({
    backgroundImage: `url("${banner}")`,
    height: calculateBannerHeight(props),
    width: "100%",

    // Create the parallax scrolling effect
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }),
}));

const tabPropType = PropTypes.shape({
  title: PropTypes.node,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

Banner.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
    aboutAlice: tabPropType,
  }).isRequired,
};

export default function Banner({ tabs }) {
  const classes = useStyles(useMuiStyles);
  const location = useLocation();
  const { isLandscape } = useOrientation();
  const { isLargeScreen } = useScreenSize();
  const headingElement = useRef(null);
  const [headingMarginTop, setHeadingMarginTop] = useState(null);

  useLayoutEffect(() => {
    const menuHeightPx = `${menuHeight}px`;
    const visibleBannerHeight = `(${calculateBannerHeight({
      isLandscape,
      isLargeScreen,
    })} - ${menuHeight}px)`;
    const elementHeight = `${headingElement.current.clientHeight}px`;

    const marginTop = `calc(${menuHeightPx} + ${visibleBannerHeight} / 2 - ${elementHeight})`;

    setHeadingMarginTop(marginTop);
  }, [headingElement, isLandscape, isLargeScreen, location.hash]);

  const { title } = Object.values(tabs).find(
    (tab) => tab.path === location.hash
  );

  return (
    <div className={classes.container}>
      <Typography
        variant="h1"
        component="h1"
        className={classes.heading}
        style={{ marginTop: headingMarginTop }}
        ref={headingElement}
      >
        {title}
      </Typography>
      <header className={classes.banner} />
    </div>
  );
}
