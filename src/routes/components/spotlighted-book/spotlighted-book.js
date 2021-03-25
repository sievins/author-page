import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../../hooks'
import SelectableBook from '../selectable-book'

const useMuiStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: ({ isExtraSmallScreen, isSmallScreen }) => ({
    width: isExtraSmallScreen ? theme.spacing(20) :
      isSmallScreen ? theme.spacing(25) :
      theme.spacing(30),
    marginBottom: theme.spacing(5),
  }),
  textContainer: {
    marginBottom: theme.spacing(5),
  },
}))

SpotlightedBook.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function SpotlightedBook({ coverSrc, title }) {
  const classes = useStyles(useMuiStyles)

  return (
    <SelectableBook
      coverSrc={coverSrc}
      title={title}
      classNames={{
        container: classes.container,
        image: classes.image,
        textContainer: classes.textContainer,
      }}
    />
  )
}
