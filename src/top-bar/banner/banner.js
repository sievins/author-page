import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useStyles } from '../../hooks'
import { menuHeight } from '../styles'
import banner from '../../assets/images/banner.jpg'

const calculateHeight = (isLandscape) => isLandscape ? '29vh' : '20vh'

const useMuiStyles = makeStyles({
  container: ({ isExtraSmallScreen, isSmallScreen }) => ({
    display: (
      isExtraSmallScreen || isSmallScreen
        ? 'none'
        : 'flex'
    ),
    justifyContent: 'center',
  }),
  header: ({ isLandscape }) => ({
    position: 'absolute',
    fontFamily: 'belepotan-italic',
    fontSize: 'xx-large',
    marginTop: `calc(${menuHeight}px / 2.5 + (${calculateHeight(isLandscape)} - ${menuHeight}px) / 2)`,
  }),
  parallax: ({ isLandscape }) => ({
    backgroundImage: `url("${banner}")`,
    height: calculateHeight(isLandscape),
    width: '100%',

    // Create the parallax scrolling effect
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }),
})

const tabPropType = PropTypes.shape({
  title: PropTypes.string,
  activeIndex: PropTypes.number.isRequired,
}).isRequired

Banner.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
    aboutAlice: tabPropType,
  }).isRequired,
  activeTab: PropTypes.number.isRequired,
}

export default function Banner({ tabs, activeTab }) {
  const classes = useStyles(useMuiStyles)

  const { title } = Object.values(tabs).find(tab => tab.activeIndex === activeTab)

  return (
    <div className={classes.container}>
      <Typography variant="h1" component="h1" className={classes.header}>
        {title}
      </Typography>
      <header className={classes.parallax} />
    </div>
  )
}
