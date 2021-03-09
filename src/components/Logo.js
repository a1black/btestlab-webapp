import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

import logoDash from 'resources/logofilled.svg'
import logoMain from 'resources/logoround.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    color: (props) =>
      props.logo === 'main'
        ? theme.palette.common.white
        : theme.palette.getContrastText(theme.palette.background.default),
    display: 'flex',
    textDecoration: 'none'
  },
  icon: {
    backgroundColor: 'transparent',
    backgroundImage: (props) =>
      `url(${props.logo === 'main' ? logoMain : logoDash})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '2.875rem',
    width: '2.875rem'
  },
  text: {
    fontWeight: 500,
    marginLeft: 8,
    lineHeight: 1.2,
    '& h6': {
      fontWeight: 500,
      lineHeight: 1.2
    }
  }
}))

/**
 * Component displays company logo that linked to the homepage.
 */
const Logo = (props) => {
  const { logo = 'dashboard', className, ...other } = props
  const classes = useStyles({ logo, ...other })

  return (
    <RouterLink to='/' className={clsx(classes.root, className)}>
      <div className={classes.icon}></div>
      <Typography
        align='left'
        className={classes.text}
        noWrap={true}
        variant='h6'
      >
        {'СПИД '}
        <Typography variant='subtitle1'>Лаборатория</Typography>
      </Typography>
    </RouterLink>
  )
}

Logo.propTypes = {
  /** Style objects for component's elements. */
  classes: PropTypes.object,
  /** CSS class for root element. */
  className: PropTypes.string,
  /** Variant of logo image: 'main' | 'dashboard'. */
  logo: PropTypes.string.isRequired
}
Logo.defaultProps = {
  logo: 'dashboard'
}

export default Logo
