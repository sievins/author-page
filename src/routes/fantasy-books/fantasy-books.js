import React from 'react'
import { Series } from '../components'
import coverSrc from '../../assets/images/covers/feathers-of-snow.jpg'

export default function FantasyBooks() {
  return (
    <Series
      spotlightedBook={{
        coverSrc,
        title: 'feathers of snow',
      }}
      seriesOverview={{
        title: 'Feathers of snow series title',
        paragraphs: [
          'The first Harry Potter book, Harry Potter and the Philosopher’s Stone, was published in 1997 to immediate popular and critical acclaim. Six further best-selling books and eight blockbuster films followed. The books have been translated into over 80 languages, won multiple awards, and sold more than 500 million copies worldwide, becoming the best-selling book series in history..',
          'In 2016, a new era of the Wizarding World was unveiled with the launch of Fantastic Beasts and Where to Find Them, an original screenplay by J.K. Rowling and the first in a major film series for Warner Bros.',
          'Pottermore Publishing is the global digital publisher of the Harry Potter series and Fantastic Beasts film tie-ins, as well as other digital audiobooks and eBooks from the Wizarding World.',
        ]
      }}
      books={[
        {
          title: 'Feathers',
          coverSrc,
        },
        {
          title: 'Feathers of snow 2',
          coverSrc,
        },
        {
          title: 'Feathers of snow 3',
          coverSrc,
        },
        {
          title: 'Feathers of snow 4',
          coverSrc,
        },
        {
          title: 'Feathers of snow 5',
          coverSrc,
        },
      ]}
    />
  )
}
