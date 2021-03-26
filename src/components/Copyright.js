import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  link: {
    color: theme.palette.text.secondary
  }
}))

/**
 * Display copyright message with link to the homepage.
 */
export default function Copyright({ className, ...rest }) {
  const classes = useStyles(rest)
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

  return (
    <Typography
      align='center'
      className={clsx(classes.root, className)}
      color='textSecondary'
      variant='body2'
    >
      {`Copyright © ${new Date().getFullYear()} `}
      <RouterLink to='/' className={classes.link}>
        {isMobile
          ? /* eslint-disable-next-line no-undef */
            process.env.REACT_APP_COPYRIGHT_SHORT
          : /* eslint-disable-next-line no-undef */
            process.env.REACT_APP_COPYRIGHT}
      </RouterLink>
    </Typography>
  )
}

Copyright.propTypes = {
  /** Style objects for component's elements. */
  classes: PropTypes.object,
  /** CSS class for root element. */
  className: PropTypes.string
}
