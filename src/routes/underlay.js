import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../hooks'

const underlayHeight = '45vh'

const useMuiStyles = makeStyles((theme) => ({
  underlay: {
    height: underlayHeight,
    backgroundColor: theme.palette.background.dark,
  },
  children: {
    marginTop: `-${underlayHeight}`,
  },
}))

Underlay.propTypes = {
  children: PropTypes.element,
}

export default function Underlay({ children }) {
  const classes = useStyles(useMuiStyles)

  return (
    <>
      <div className={classes.underlay}/>
      <div className={classes.children}>
        {children}
      </div>
    </>
  )
}
