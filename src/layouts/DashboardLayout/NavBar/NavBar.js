import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import AvatarIcon from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import Logo from 'components/Logo'
import NavItem from 'layouts/DashboardLayout/NavBar/NavItem'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  divider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  drawer: {
    display: 'flex',
    width: drawerWidth
  },
  logo: {
    color: theme.palette.primary.main,
    flex: '0 0 auto',
    justifyContent: 'start',
    paddingLeft: theme.spacing(2),
    ...theme.mixins.toolbar,
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  navigation: {
    flex: '1 1 0',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    overflow: 'auto'
  },
  profile: {
    flex: '0 0 auto'
  }
}))

/**
 * Generates components of navigation.
 *
 * @param {Object[][]} navGroups List of navigational links grouped in separeted lists.
 * @param {[function]} divider Divider component that added after each group.
 * @yields {function} React functional component.
 */
function* navGenerator(navGroups, divider) {
  for (let group of navGroups) {
    for (let item of group) {
      yield <NavItem key={item.label} {...item} />
    }

    if (divider) {
      yield React.cloneElement(divider)
    }
  }
}

export default function NavBar({
  className,
  items,
  open,
  onToggle,
  variant,
  ...rest
}) {
  const classes = useStyles(rest)
  const theme = useTheme()

  /** @todo Implement auth user logic. */
  const userInfo = {
    name: 'Черняев А.О.',
    position: 'JS developer'
  }

  /**
   * @param {string} type Drawer variant: temporary or permanent.
   * @returns {Object} Parameters for Drawer component.
   */
  const navDrawerFactory = (type) =>
    type === 'temporary'
      ? {
          anchor: theme.direction === 'rtl' ? 'right' : 'left',
          open: open === true,
          onClose: onToggle,
          variant: 'temporary',
          ModalProps: { keepMounted: true }
        }
      : {
          open: true,
          variant: 'permanent'
        }

  return (
    <nav
      className={clsx(classes.root, className)}
      area-label='primary-navigation'
    >
      <Drawer
        classes={{ paper: classes.drawer }}
        {...navDrawerFactory(variant)}
      >
        <Logo className={classes.logo} />
        <Divider />
        <List className={classes.navigation}>
          {[
            ...navGenerator(
              items.slice(0, -1),
              <Divider
                className={classes.divider}
                component='li'
                variant='middle'
              />
            )
          ]}
          {[...navGenerator(items.slice(-1))]}
        </List>
        <List className={classes.profile}>
          <Divider component='li' />
          <ListItem key='profile-info'>
            <ListItemAvatar>
              <Avatar>
                <AvatarIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={userInfo.name}
              secondary={userInfo.position}
            />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  )
}

NavBar.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string,
  /** List of objects that contains items for navigation menu. */
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.elementType,
        title: PropTypes.string
      })
    )
  ).isRequired,
  /** State of navigation drawer: closed or opened. */
  open: PropTypes.bool,
  /** Callback fired when the navigation drawer requests to be closed. */
  onToggle: PropTypes.func.isRequired,
  /** Drawer variant. */
  variant: PropTypes.string
}

NavBar.defaultProps = {
  open: false,
  variant: 'temporary'
}
