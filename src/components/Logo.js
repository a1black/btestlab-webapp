import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import { ReactComponent as LogoIcon } from 'resources/logomono.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(0)
  },
  icon: {
    fill: theme.palette.primary.contrastText,
    height: '2.725rem',
    marginRight: theme.spacing(1),
    width: '2.725rem'
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(1),
    lineHeight: 1.2,
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: 1.2
    }
  }
}))

/**
 * Component displays company logo that linked to the homepage.
 */
export default function Logo({ logo: Icon, className, ...rest }) {
  const classes = useStyles(rest)

  return (
    <Button
      classes={{ startIcon: classes.icon }}
      className={clsx(classes.root, className)}
      component={RouterLink}
      startIcon={Icon || <LogoIcon />}
      to='/'
    >
      <Typography align='left' className={classes.label} noWrap variant='h6'>
        {'СПИД '}
        <Typography component='h6' variant='subtitle1'>
          Лаборатория
        </Typography>
      </Typography>
    </Button>
  )
}

Logo.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string,
  /** Logo image. */
  logo: PropTypes.element.isRequired
}

Logo.defaultProps = {
  logo: <LogoIcon />
}
