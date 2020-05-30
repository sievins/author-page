import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Corner from './corner'
import { useStyles } from '../hooks'
import PropTypes from 'prop-types'

const useMuiStyles = makeStyles({
  container: ({ isExtraSmallScreen }) => ({
    flexGrow: 1,
    flexDirection: isExtraSmallScreen && 'column',
  }),
})

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired

Corners.propTypes = {
  tabs: PropTypes.shape({
    christianCorner: tabPropType,
    fantasyCorner: tabPropType,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default function Corners({ tabs, setActiveTab }) {
  const classes = useStyles(useMuiStyles)

  return (
    <Grid container className={classes.container}>
      <Corner
        title={tabs.christianCorner.text}
        authorName="Alice Gent"
        onClick={() => setActiveTab(tabs.christianCorner.activeIndex)}
      />
      <Corner
        title={tabs.fantasyCorner.text}
        authorName="Alice Ivinya"
        onClick={() => setActiveTab(tabs.fantasyCorner.activeIndex)}
      />
    </Grid>
  )
}
