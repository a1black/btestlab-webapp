import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Outlet } from 'react-router-dom'

import Copyrignt from 'components/Copyright'
import NavBar from 'layouts/DashboardLayout/NavBar'
import TopBar from 'layouts/DashboardLayout/TopBar'
import navigation from 'layouts/DashboardLayout/navigation'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  content: {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    paddingBottom: theme.spacing(2)
  },
  container: {
    flex: '1 1 0',
    overflow: 'auto',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  footer: {
    flex: '0 1 auto'
  }
}))

function DashboardLayout(props) {
  const classes = useStyles(props)
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'))
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const handleMobileNavToggle = () => setMobileNavOpen(!isMobileNavOpen)

  return (
    <Box className={classes.root}>
      <NavBar
        items={navigation}
        open={isMobileNavOpen}
        onToggle={handleMobileNavToggle}
        variant={isMobile ? 'temporary' : 'permanent'}
      />
      <Box className={classes.content}>
        <TopBar navOpen={isMobileNavOpen} onNavToggle={handleMobileNavToggle} />
        <Container className={classes.container}>
          <Outlet />
        </Container>
        <Copyrignt className={classes.footer} />
      </Box>
    </Box>
  )
}

export default DashboardLayout
