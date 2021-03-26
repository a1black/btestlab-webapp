import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import clx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

import Logo from 'components/Logo'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.theme
  },
  toolbar: {}
}))

export default function TopBar({ className, ...rest }) {
  const classes = useStyles(rest)

  return (
    <AppBar
      className={clx(classes.root, className)}
      elevation={0}
      position='sticky'
    >
      <Toolbar className={classes.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string
}
