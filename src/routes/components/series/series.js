import React from 'react'
import PropTypes from 'prop-types'
import Underlay from '../../underlay'
import SpotlightedBook from '../spotlighted-book'
import SeriesOverview from '../series-overview'
import Books from '../books'

Series.propTypes = {
  spotlightedBook: PropTypes.shape({
    coverSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
  spotlightedBook: { coverSrc, title: spotlightBookTitle },
  seriesOverview: { title: seriesOverviewTitle, paragraphs },
  books = [],
  showDivider,
}) {
  return (
    <Underlay>
      <SpotlightedBook coverSrc={coverSrc} title={spotlightBookTitle} />
      <SeriesOverview title={seriesOverviewTitle} paragraphs={paragraphs} />
      <Books books={books} showDivider={showDivider} />
    </Underlay>
  )
}
