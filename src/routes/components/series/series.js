import React from 'react'
import PropTypes from 'prop-types'
import SpotlightedBook from '../spotlighted-book'
import SeriesOverview from '../series-overview'
import Books from '../books'

Series.propTypes = {
  spotlightedBook: PropTypes.shape({
    coverSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    showTitle: PropTypes.bool.isRequired,
  }).isRequired,
  seriesOverview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverSrc: PropTypes.string.isRequired,
  })),
  showDivider: PropTypes.bool,
}

export default function Series({
  spotlightedBook: { coverSrc, title: spotlightBookTitle, showTitle },
  seriesOverview: { title: seriesOverviewTitle, paragraphs },
  books = [],
  showDivider,
}) {
  return (
    <>
      <SpotlightedBook coverSrc={coverSrc} title={spotlightBookTitle} showTitle={showTitle} />
      <SeriesOverview title={seriesOverviewTitle} paragraphs={paragraphs} />
      <Books books={books} showDivider={showDivider} />
    </>
  )
}
