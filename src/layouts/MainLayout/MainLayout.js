import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Outlet } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import TopBar from 'layouts/MainLayout/TopBar'
import Copyright from 'components/Copyright'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingBottom: 32
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
})

const MainLayout = (props) => {
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

export default MainLayout
