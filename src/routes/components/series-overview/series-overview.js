import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Heading } from "../../../components";
import { useStyles } from "../../../hooks";

const useMuiStyles = makeStyles((theme) => ({
  text: {
    fontSize: "calc(8px + 1.2vmin)",
    marginBottom: theme.spacing(5),
  },
}));

SeriesOverview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default function SeriesOverview({ title, paragraphs }) {
  const classes = useStyles(useMuiStyles);

  return (
    <>
      <Heading variant="h2" component="h2">
        {title}
      </Heading>
      <Grid
        container
        direction="column"
        alignContent="center"
        className={classes.text}
      >
        <Grid item xs={8} md={6}>
          {paragraphs.map((paragraph, index) => {
            const paragraphIsArray = Array.isArray(paragraph);
            return paragraphIsArray ? (
              <p key={`paragraph-${index}`}>
                {paragraph.map((item, itemIndex) => (
                  <React.Fragment key={`paragraph-${index}-item-${itemIndex}`}>
                    {item}
                  </React.Fragment>
                ))}
              </p>
            ) : (
              <p key={`paragraph-${index}`}>{paragraph}</p>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
