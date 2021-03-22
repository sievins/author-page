import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Corner from './corner'
import { useStyles } from '../../../hooks'
import PropTypes from 'prop-types'

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired

Corners.propTypes = {
  tabs: PropTypes.shape({
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

const useMuiStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  divider: ({ isLargeScreen, isMediumScreen, isSmallScreen }) => {
    const height =
      isLargeScreen ? 6 :
      isMediumScreen ? 6 :
      isSmallScreen ? 3 : 3

    return {
      minHeight: theme.spacing(height),
    }
  },
}))

export default function Corners({ tabs, setActiveTab }) {
  const classes = useStyles(useMuiStyles)

  return (
    <Grid container className={classes.container}>
      <Corner
        title={tabs.christianBooks.text}
        authorName="Alice Gent"
        onClick={() => setActiveTab(tabs.christianBooks.activeIndex)}
      />
      <div className={classes.divider} />
      <Corner
        title={tabs.fantasyBooks.text}
        authorName="Alice Ivinya"
        onClick={() => setActiveTab(tabs.fantasyBooks.activeIndex)}
      />
    </Grid>
  )
}
