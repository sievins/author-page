import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../hooks'
import Avatar from './avatar'
import Corners from './corners'

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired

Home.propTypes = {
  tabs: PropTypes.shape({
    christianCorner: tabPropType,
    fantasyCorner: tabPropType,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

const useMuiStyles = makeStyles((theme) => ({
  container: ({ isPortrait }) => ({
    display: 'flex',
    alignSelf: 'center',
    flexGrow: 1,
    flexDirection: isPortrait ? 'column' : 'row',
  }),
  divider: ({ isLargeScreen, isMediumScreen, isSmallScreen }) => {
    const width =
      isLargeScreen ? 30 :
      isMediumScreen ? 18 :
      isSmallScreen ? 10 : 10

    return {
      minWidth: theme.spacing(width),
    }
  },
}))

export default function Home({ tabs, setActiveTab }) {
  const classes = useStyles(useMuiStyles)

  return (
    <div className={classes.container}>
      <Avatar />
      <div className={classes.divider} />
      <Corners tabs={tabs} setActiveTab={setActiveTab} />
    </div>
  )
}
