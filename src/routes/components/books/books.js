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
  chip: {
    marginTop: theme.spacing(1),
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
      chipLabel: PropTypes.string,
      chipPath: PropTypes.string,
      showChip: PropTypes.bool,
    })
  ),
  showDivider: PropTypes.bool,
};

export default function Books({ books, showDivider = false }) {
  const classes = useStyles(useMuiStyles);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={5} sm={8} md={8} lg={6}>
        <Grid container spacing={10} justifyContent="center">
          {books.length !== 0 &&
            books.map(
              ({
                title,
                coverSrc,
                universalBookLink,
                showChip,
                chipLabel,
                chipPath,
              }) => (
                <Grid item key={title} xs={12} sm={6} md={4}>
                  <Grid container justifyContent="center">
                    <Grid item xs={10}>
                      <SelectableBook
                        coverSrc={coverSrc}
                        title={title}
                        classNames={{
                          image: classes.image,
                          text: classes.text,
                          chip: classes.chip,
                        }}
                        universalBookLink={universalBookLink}
                        showTitle
                        showChip={showChip}
                        chipLabel={chipLabel}
                        chipPath={chipPath}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            )}
        </Grid>
        {showDivider && <Divider className={classes.divider} />}
      </Grid>
    </Grid>
  );
}
