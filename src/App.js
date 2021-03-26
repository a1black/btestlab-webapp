import React, { useState, useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { useRoutes } from 'react-router-dom'

import GlobalStyles from 'resources/GlobalStyles'
import createTheme, { isSupportedColor, Mode } from 'theme'
import routes from './routes'

function App() {
  const routing = useRoutes(routes)
  const [mode, setMode] = useState(true)
  const [color, setColor] = useState('blue')

  const handleModeChange = (value) => {
    setMode(value === true || value === Mode.D ? Mode.D : Mode.L)
  }

  const handleModeToggle = () => {
    setMode(mode === Mode.D ? Mode.L : Mode.D)
  }

  const handleColorChange = (value) => {
    if (isSupportedColor(value)) {
      setColor(value)
      setMode(Mode.L)
    }
  }

  /** @todo Move default color and useAltDark into global app settings. */
  const theme = useMemo(
    () =>
      createTheme({
        mode,
        color,
        useAltDark: false,
        onModeChange: handleModeChange,
        onModeToggle: handleModeToggle,
        onColorChange: handleColorChange
      }),
    [color, mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  )
}

export default App
