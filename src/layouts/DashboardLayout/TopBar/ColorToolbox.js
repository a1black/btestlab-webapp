import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import BrushIcon from '@material-ui/icons/BrushSharp'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/CheckSharp'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PaletteIcon from '@material-ui/icons/PaletteSharp'
import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Mode } from 'theme'

const popoverWidth = 256

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    overflow: 'hidden',
    width: popoverWidth,
    [theme.breakpoints.down('xs')]: {
      width: Math.floor(popoverWidth * 0.6)
    }
  },
  title: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  content: {
    padding: theme.spacing(1)
  },
  tile: {
    background: (props) =>
      `linear-gradient(135deg, ${theme.palette.common.white}, ${props.primary} 40%)`,
    border: (props) => `1px solid ${props.primary}`,
    color: (props) => props.primary,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  tileLabel: {
    border: '3px solid',
    borderColor: 'inherit',
    borderRadius: 50,
    color: 'inherit',
    display: 'inherit',
    padding: 2
  },
  tileIcon: {
    fontSize: '1.5rem'
  },
  active: {
    color: theme.palette.common.white
  }
}))

/** Button component that changes theme primary and secondary colors. */
function ColorTile({ name, onClose, primary, secondary }) {
  const classes = useStyles({ primary, secondary })
  const theme = useTheme()

  const active = theme.theme.active === name && theme.palette.type === Mode.L
  const Icon = active ? CheckIcon : BrushIcon

  const handleClick = () => {
    !active && theme.theme.onColorChange(name)
    onClose()
  }

  return (
    <Grid item xs={12} sm={6}>
      <Button
        area-label={name}
        className={classes.tile}
        fullWidth
        onClick={handleClick}
        variant='contained'
      >
        <span className={clsx(classes.tileLabel, active && classes.active)}>
          <Icon className={classes.tileIcon} />
        </span>
      </Button>
    </Grid>
  )
}

/** Menu component for changing theme primary and secondary colors. */
export default function ColorToolbox({ className, ...rest }) {
  const classes = useStyles(rest)
  const theme = useTheme()
  const [anchor, setAnchor] = useState(null)

  const handleClick = (event) => {
    setAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  function* colorGen(schemas) {
    for (let name in schemas) {
      yield [name, ...schemas[name]]
    }
  }

  return (
    <div>
      <IconButton
        area-label='change theme'
        className={clsx(classes.root, className)}
        edge='start'
        onClick={handleClick}
      >
        <PaletteIcon />
      </IconButton>
      <Popover
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        elevation={8}
        onClose={() => setAnchor(null)}
        open={Boolean(anchor)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Paper className={classes.paper}>
          <Box className={classes.title}>
            <Typography variant='subtitle1'>Choose color scheme</Typography>
          </Box>
          <Grid container className={classes.content} spacing={1}>
            {[...colorGen(theme.theme.schemas)].map(
              ([name, primary, secondary]) => (
                <ColorTile
                  key={name}
                  name={name}
                  onClose={handleClose}
                  primary={primary}
                  secondary={secondary}
                />
              )
            )}
          </Grid>
        </Paper>
      </Popover>
    </div>
  )
}

ColorTile.propTypes = {
  /** Color scheme name. */
  name: PropTypes.string.isRequired,
  /** Handler for closing parent component. */
  onClose: PropTypes.func.isRequired,
  /** Primary color. */
  primary: PropTypes.string.isRequired,
  /** Secondary color. */
  secondary: PropTypes.string.isRequired
}

ColorToolbox.propTypes = {
  /** CSS class for root element. */
  className: PropTypes.string
}
