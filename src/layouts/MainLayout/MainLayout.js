import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { Outlet } from 'react-router-dom'

import TopBar from 'layouts/MainLayout/TopBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto',
    height: '100vh',
    overflow: 'hidden'
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    height: '100%',
    overflow: 'hidden',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  containerContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  },
  topbar: {},
  icon: {},
  label: {}
}))

const MainLayout = (props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <TopBar
        classes={{
          root: classes.topbar,
          icon: classes.icon,
          label: classes.label
        }}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Box className={classes.containerContent}>
            <Outlet />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default MainLayout
