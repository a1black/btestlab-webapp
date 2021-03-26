import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DarkModeIcon from '@material-ui/icons/BrightnessHighSharp'
import IconButton from '@material-ui/core/IconButton'
import LightModeIcon from '@material-ui/icons/Brightness4Sharp'
import LogoutIcon from '@material-ui/icons/ExitToAppRounded'
import MenuIcon from '@material-ui/icons/Menu'
import ToolBar from '@material-ui/core/Toolbar'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import ColorToolbox from 'layouts/DashboardLayout/TopBar/ColorToolbox'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.theme
  },
  menuButton: {
    color: 'inherit',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    color: theme.palette.text.themeContrast
  },
  toolbarFiller: {
    flex: '1 1 0%'
  },
  toolButton: {
    color: 'inherit',
    marginRight: theme.spacing(0)
  }
}))

export default function TopBar({ className, onNavToggle, ...rest }) {
  const classes = useStyles(rest)
  const theme = useTheme()
  console.log(theme)

  /** @todo Implement auth logic. */
  const handleLogout = () => console.log('Implement logout')

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      position='sticky'
    >
      <ToolBar className={classes.toolbar}>
        <IconButton
          area-label='open navigation'
          className={classes.menuButton}
          edge='start'
          onClick={onNavToggle}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.toolbarFiller} />
        <ColorToolbox className={classes.toolButton} />
        <IconButton
          area-label='toggle light/dark theme'
          className={classes.toolButton}
          edge='start'
          onClick={theme.theme.onModeToggle}
        >
          {theme.palette.type === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <IconButton
          area-label='logout'
          className={classes.toolButton}
          edge='start'
          onClick={handleLogout}
        >
          <LogoutIcon />
        </IconButton>
      </ToolBar>
    </AppBar>
  )
}

TopBar.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string,
  /** Callback fired when the navigation drawer requests to be closed. */
  onNavToggle: PropTypes.func.isRequired
}
