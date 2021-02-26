import { makeStyles } from '@material-ui/core'
import '@fontsource/roboto'
import '@fontsource/roboto/500.css'

const useStyles = makeStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%',
      fontFamily: 'Roboto'
    },
    a: {
      textDecoration: 'none'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
})

const GlobalStyles = () => {
  useStyles()

  return null
}

export default GlobalStyles
