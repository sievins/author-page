import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: 'white',
  },
  tab: {
    width: theme.spacing(40),
    maxWidth: theme.spacing(40),
    fontFamily: 'belepotan-italic',
  },
  home: {
    display: 'none',
  },
}))

Menu.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default function Menu({ activeTab, setActiveTab }) {
  const classes = useStyles()

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
    </AppBar>
  )
}
