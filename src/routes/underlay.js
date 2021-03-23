import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../hooks'

const calculateUnderlayHeight = ({ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen }) => (
  isLargeScreen ? '45vh' :
  isMediumScreen ? '45vh' :
  isSmallScreen ? '38vh' :
  isExtraSmallScreen ? '31vh'
  : '45vh'
)

const useMuiStyles = makeStyles((theme) => ({
  underlay: (props) => ({
    height: calculateUnderlayHeight(props),
    backgroundColor: theme.palette.background.dark,
  }),
  children: (props) => ({
    marginTop: `-${calculateUnderlayHeight(props)}`,
  }),
}))

Underlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ])
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
