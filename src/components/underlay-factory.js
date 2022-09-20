import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../hooks";

export default function underlayFactory(calculateHeight) {
  const useMuiStyles = makeStyles((theme) => ({
    underlay: (props) => ({
      height: calculateHeight(props),
      backgroundColor: theme.palette.background.dark,
    }),
    children: (props) => ({
      marginTop: `-${calculateHeight(props)}`,
    }),
  }));

  Underlay.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    classes: PropTypes.shape({
      children: PropTypes.string,
    }),
  };

  function Underlay({ children, classes: classesProp = {} }) {
    const classes = useStyles(useMuiStyles);

    return (
      <>
        <div className={classes.underlay} />
        <div className={clsx([classes.children, classesProp.children])}>
          {children}
        </div>
      </>
    );
  }

  return Underlay;
}
