import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fade from './fade'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../../hooks'

const useMuiStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  image: ({ isExtraSmallScreen, isSmallScreen }) => ({
    width: isExtraSmallScreen ? theme.spacing(20) :
      isSmallScreen ? theme.spacing(25) :
      theme.spacing(30),
    marginBottom: theme.spacing(5),
    cursor: 'pointer',
  }),
  text: {
    cursor: 'pointer',
  },
}))

SpotlightedBook.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function SpotlightedBook({ coverSrc, title }) {
  const classes = useStyles(useMuiStyles)
  const [focus, setFocus] = useState(false)

  return (
    <div className={classes.container}>
      <Fade in={focus} opacity={0.7}>
        <img
          src={coverSrc}
          className={classes.image}
          alt="Book cover"
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        />
      </Fade>
      <Fade in={focus}>
        <span
          className={classes.text}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          {title}
        </span>
      </Fade>
    </div>
  )
}
