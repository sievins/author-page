import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fade from './fade'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  text: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
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
  universalBookLink: PropTypes.string,
}

export default function SelectableBook({ coverSrc, title, classNames = {}, showTitle, universalBookLink }) {
  const classes = useStyles(useMuiStyles)
  const [focus, setFocus] = useState(false)

  const style = {
    cursor: universalBookLink ? 'pointer' : 'default',
  }

  const openUniversalBookLink = () => {
    if (universalBookLink) window.open(universalBookLink)
  }

  return (
    <div className={classNames.container}>
      <Fade in={focus} opacity={0.7}>
        <img
          src={coverSrc}
          className={classNames.image}
          style={style}
          alt="Book cover"
          onMouseEnter={() => universalBookLink && setFocus(true)}
          onMouseLeave={() => universalBookLink && setFocus(false)}
          onClick={openUniversalBookLink}
        />
      </Fade>
      { showTitle &&
        <Fade in={focus} className={classNames.textContainer}>
          <span
            className={`${classes.text} ${classNames.text}`}
            style={style}
            onMouseEnter={() => universalBookLink && setFocus(true)}
            onMouseLeave={() => universalBookLink && setFocus(false)}
            onClick={openUniversalBookLink}
          >
            {title}
          </span>
        </Fade>
      }
    </div>
  )
}
