import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core'

import Logo from 'components/Logo'

const useStyles = makeStyles({
  root: {},
  icon: {},
  label: {}
})

const TopBar = (props) => {
  const classes = useStyles(props)

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.root}>
        <Logo
          logo='main'
          classes={{ root: classes.label, icon: classes.icon }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
