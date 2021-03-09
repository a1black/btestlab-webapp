import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    color: theme.palette.text.secondary
  }
}))

/**
 * Display copyright message with link to the homepage.
 */
const Copyright = (props) => {
  const { className, ...other } = props
  const classes = useStyles(other)
  return (
    <Typography
      align='center'
      className={clsx(classes.root, className)}
      color='textSecondary'
      variant='body2'
    >
      {`Copyright ©  ${new Date().getFullYear()} `}
      <RouterLink to='/' className={classes.link}>
        {/* eslint-disable-next-line no-undef */}
        {process.env.REACT_APP_COPYRIGHT}
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

export default Copyright
