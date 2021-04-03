import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import { useStyles } from "../../../hooks";
import SelectableBook from "../selectable-book";

const useMuiStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  text: {
    fontSize: "calc(6px + 1vmin)",
  },
  divider: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    height: "2px",
  },
}));

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      coverSrc: PropTypes.string.isRequired,
      universalBookLink: PropTypes.string,
    })
  ),
  showDivider: PropTypes.bool,
};

export default function Books({ books, showDivider = false }) {
  const classes = useStyles(useMuiStyles);

  return (
    <Grid container justify="center">
      <Grid item xs={5} sm={8} md={8} lg={6}>
        <Grid container spacing={10} justify="center">
          {books.length !== 0 &&
            books.map(({ title, coverSrc, universalBookLink }) => (
              <Grid item key={title} xs={12} sm={6} md={4}>
                <Grid container justify="center">
                  <Grid item xs={10}>
                    <SelectableBook
                      coverSrc={coverSrc}
                      title={title}
                      classNames={{
                        image: classes.image,
                        text: classes.text,
                      }}
                      universalBookLink={universalBookLink}
                      showTitle
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
        {showDivider && <Divider className={classes.divider} />}
      </Grid>
    </Grid>
  );
}
