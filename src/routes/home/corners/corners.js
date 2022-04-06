import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Corner from "./corner";
import { useStyles } from "../../../hooks";
import PropTypes from "prop-types";

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

Corners.propTypes = {
  tabs: PropTypes.shape({
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
  }).isRequired,
};

const useMuiStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    alignSelf: "center",
  },
  divider: ({ isLargeScreen, isMediumScreen, isSmallScreen }) => {
    const height = isLargeScreen
      ? 6
      : isMediumScreen
      ? 6
      : isSmallScreen
      ? 3
      : 3;

    return {
      minHeight: theme.spacing(height),
    };
  },
}));

export default function Corners({ tabs }) {
  const classes = useStyles(useMuiStyles);
  const history = useHistory();

  return (
    <Grid container className={classes.container}>
      <Corner
        title={tabs.fantasyBooks.text}
        authorName="Alice Ivinya"
        onClick={() => history.push(tabs.fantasyBooks.path)}
      />
      <div className={classes.divider} />
      <Corner
        title={tabs.christianBooks.text}
        authorName="Alice Gent"
        onClick={() => history.push(tabs.christianBooks.path)}
      />
    </Grid>
  );
}
