import React from "react";
import PropTypes from "prop-types";
import SpotlightedBook from "../spotlighted-book";
import SeriesOverview from "../series-overview";
import Books from "../books";

Series.propTypes = {
  spotlightedBook: PropTypes.shape({
    chipLabel: PropTypes.string,
    chipPath: PropTypes.string,
    chipTooltip: PropTypes.string,
    showChip: PropTypes.bool,
    coverSrc: PropTypes.string.isRequired,
    isChipLink: PropTypes.bool,
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
      chipLabel: PropTypes.string,
      chipPath: PropTypes.string,
      showChip: PropTypes.bool,
    })
  ),
  showDivider: PropTypes.bool,
};

export default function Series({
  spotlightedBook: {
    chipLabel,
    chipPath,
    chipTooltip,
    coverSrc,
    isChipLink,
    title: spotlightBookTitle,
    showChip = false,
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
        chipLabel={chipLabel}
        chipPath={chipPath}
        chipTooltip={chipTooltip}
        coverSrc={coverSrc}
        isChipLink={isChipLink}
        title={spotlightBookTitle}
        showChip={showChip}
        showTitle={showTitle}
        universalBookLink={universalBookLink}
      />
      <SeriesOverview title={seriesOverviewTitle} paragraphs={paragraphs} />
      <Books books={books} showDivider={showDivider} />
    </>
  );
}
