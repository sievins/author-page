import React from "react";
import PropTypes from "prop-types";
import SpotlightedBook from "../spotlighted-book";
import SeriesOverview from "../series-overview";
import Books from "../books";

Series.propTypes = {
  spotlightedBook: PropTypes.shape({
    coverSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    universalBookLink: PropTypes.string,
    showTitle: PropTypes.bool.isRequired,
  }).isRequired,
  seriesOverview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
  }).isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      coverSrc: PropTypes.string.isRequired,
      universalBookLink: PropTypes.string,
    })
  ),
  showDivider: PropTypes.bool,
};

export default function Series({
  spotlightedBook: {
    coverSrc,
    title: spotlightBookTitle,
    showTitle,
    universalBookLink,
  },
  seriesOverview: { title: seriesOverviewTitle, paragraphs },
  books = [],
  showDivider,
}) {
  return (
    <>
      <SpotlightedBook
        coverSrc={coverSrc}
        title={spotlightBookTitle}
        showTitle={showTitle}
        universalBookLink={universalBookLink}
      />
      <SeriesOverview title={seriesOverviewTitle} paragraphs={paragraphs} />
      <Books books={books} showDivider={showDivider} />
    </>
  );
}
