import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { useStyles, useScreenSize } from '../hooks'

const showNewsletterSubscription = () => {
  document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  window.dojoRequire(
    ['mojo/signup-forms/Loader'],
    L => {
      L.start({
        baseUrl: 'mc.us3.list-manage.com',
        uuid: 'e9b41bd819600a267a1d0397f',
        lid: 'c436762b5b',
        uniqueMethods: true,
      })
    },
  )
}

const useMuiStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: 'white',
    height: 48,
  },
  home: {
    display: 'none',
  },
  tab: ({ isLargeScreen }) => {
    const width = isLargeScreen ? 40 : 25
    return {
      width: theme.spacing(width),
      maxWidth: theme.spacing(width),
      fontFamily: 'belepotan-italic',
    }
  },
  button: {
    fontFamily: 'belepotan-italic',
    top: -42.2,
    marginLeft: 'auto',
    marginRight: 5.8,
  },
}))

Menu.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default function Menu({ activeTab, setActiveTab }) {
  const classes = useStyles(useMuiStyles)
  const { isExtraSmallScreen, isSmallScreen, isLargeScreen } = useScreenSize()

  const showNewsletterButton = !isExtraSmallScreen && !isSmallScreen
  const newsletterText = isLargeScreen ? 'Subscribe to newsletter' : 'Newsletter'

  const handleChange = (event, tab) => {
    setActiveTab(tab)
  }

  return (
    <AppBar position="static" className={classes.bar}>
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label="Home" className={classes.home} />
        <Tab label="Christian Corner" className={classes.tab} />
        <Tab label="Fantasy Corner" className={classes.tab} />
        <Tab label="About Alice" className={classes.tab} />
      </Tabs>
      { showNewsletterButton &&
        <Button onClick={showNewsletterSubscription} variant="outlined" color="secondary" className={classes.button}>
          {newsletterText}
        </Button>
      }
    </AppBar>
  )
}
