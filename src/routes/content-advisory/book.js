import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";

Book.propTypes = {
  title: PropTypes.string.isRequired,
  advisories: PropTypes.string.isRequired,
};

const useMuiStyles = makeStyles({
  container: {
    textAlign: "left",

    // Paragraph styles (div's cannot be descendants of p's)
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
});

export default function Book({ title, advisories }) {
  const classes = useStyles(useMuiStyles);

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={4}>
          <b>{title}:</b>
        </Grid>
        <Grid item xs={8}>
          {advisories}
        </Grid>
      </Grid>
    </div>
  );
}
