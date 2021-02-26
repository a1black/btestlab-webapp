import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import routes from './routes'
import GlobalStyles from 'resources/GlobalStyles'

const App = () => {
  const routing = useRoutes(routes)
  const theme = createMuiTheme({})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  )
}

export default App
