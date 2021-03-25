import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fade from './fade'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  image: {
    cursor: 'pointer',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  },
}))

SelectableBook.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.string,
    textContainer: PropTypes.string,
    text: PropTypes.string,
  }),
  showTitle: PropTypes.bool.isRequired,
}

export default function SelectableBook({ coverSrc, title, classNames = {}, showTitle }) {
  const classes = useStyles(useMuiStyles)
  const [focus, setFocus] = useState(false)

  return (
    <div className={classNames.container}>
      <Fade in={focus} opacity={0.7}>
        <img
          src={coverSrc}
          className={`${classes.image} ${classNames.image}`}
          alt="Book cover"
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        />
      </Fade>
      { showTitle &&
        <Fade in={focus} className={classNames.textContainer}>
          <span
            className={`${classes.text} ${classNames.text}`}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            {title}
          </span>
        </Fade>
      }
    </div>
  )
}
