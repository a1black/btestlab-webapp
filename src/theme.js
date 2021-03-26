import amber from '@material-ui/core/colors/amber'
import blue from '@material-ui/core/colors/blue'
import cyan from '@material-ui/core/colors/cyan'
import green from '@material-ui/core/colors/green'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import { deepmerge } from '@material-ui/utils'
import { createMuiTheme } from '@material-ui/core/styles'

/** type {Object} List of supported schemes for primary and secondary colors. */
const colors = Object.freeze({
  blue: [blue[700], '#dc004e'],
  green: [green[700], orange['A400']],
  indigo: [indigo[500], cyan['A400']],
  red: [red[700], amber['A400']]
})

/** type {Array} Default [primary, secondary] colors. */
const defaultColor = colors.blue

/** type {Object} Palette parameters for dark display mode. */
const dark = {
  type: 'dark',
  primary: {
    main: blue[200]
  },
  secondary: {
    main: pink[200]
  },
  background: {
    default: '#121212',
    paper: '#424242'
  },
  text: {}
}

/** type {Object} Palette parameters for alternative dark display mode. */
const darkAlt = {
  background: {
    default: '#1b2635',
    paper: '#233044'
  }
}

/** type {Object} Palette parameters for light display mode. */
const light = {
  type: 'light',
  primary: {
    main: defaultColor[0]
  },
  secondary: {
    main: defaultColor[1]
  },
  background: {
    default: '#fff',
    paper: '#fff'
  },
  text: {}
}

/** type {Object} Enum of supported background color schemes. */
export const Mode = Object.freeze({
  D: 'dark',
  L: 'light'
})

export function isSupportedColor(color) {
  return Object.prototype.hasOwnProperty.call(colors, color)
}

export default function createTheme({ mode, color, useAltDark, ...rest }) {
  const makeColor = ([primary, secondary]) => ({
    primary: { main: primary },
    secondary: { main: secondary }
  })

  const makeDark = (useAlt) => {
    const palette = deepmerge(dark, useAlt ? darkAlt : {})
    palette.background.theme = palette.background.default
    palette.text.themeContrast = '#fff'
    return palette
  }

  const makeLight = (color) => {
    const palette = deepmerge(
      light,
      isSupportedColor(color) ? makeColor(colors[color]) : {}
    )
    palette.background.theme = palette.primary.main
    palette.text.themeContrast = palette.primary.contrastText
    return palette
  }

  return createMuiTheme({
    palette: {
      ...(mode === Mode.D ? makeDark(useAltDark) : makeLight(color))
    },
    theme: {
      active: color,
      schemas: { ...colors },
      useAltDark,
      ...rest
    }
  })
}
