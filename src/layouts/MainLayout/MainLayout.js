import React from 'react'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Copyright from 'components/Copyright'
import TopBar from 'layouts/MainLayout/TopBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingBottom: theme.spacing(4)
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center'
  },
  footer: {
    flex: '0 1 auto'
  }
}))

export default function MainLayout(props) {
  const classes = useStyles(props)

  return (
    <Box className={classes.root}>
      <TopBar />
      <Box className={classes.content}>
        <Outlet />
      </Box>
      <Hidden smDown>
        <Box className={classes.footer}>
          <Copyright />
        </Box>
      </Hidden>
    </Box>
  )
}
