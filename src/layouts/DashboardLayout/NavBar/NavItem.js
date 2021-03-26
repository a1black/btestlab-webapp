import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import clsx from 'clsx'

import { NavLink as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1),
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  button: {
    color: theme.palette.text.secondary,
    fontSize: '1.125rem',
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    textTransform: 'none'
  },
  icon: {
    fontSize: '1.725rem',
    marginRight: theme.spacing(2)
  },
  label: {
    // marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold
  }
}))

function NavItem({ className, icon: Icon, label, href, ...rest }) {
  const classes = useStyles(rest)

  return (
    <ListItem className={clsx(classes.root, className)}>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        fullWidth
        to={href}
      >
        <Icon className={classes.icon} />
        <span className={classes.label}>{label}</span>
      </Button>
    </ListItem>
  )
}

NavItem.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string,
  /** React component that displays SVG icon. */
  icon: PropTypes.elementType.isRequired,
  /** Name displayed in navigation menu. */
  label: PropTypes.string.isRequired,
  /** Route to linked page. */
  href: PropTypes.string.isRequired
}

export default NavItem
