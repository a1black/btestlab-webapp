import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import PageTitle from 'components/PageTitle'

const useStyles = makeStyles({
  root: {
    flex: '1 1 0%'
  }
})

const Login = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <PageTitle title='Sign In' />
      <Container maxWidth='sm'>
        <Typography
          variant='h4'
          align='left'
          color='textPrimary'
          gutterBottom={true}
        >
          Sign In
        </Typography>
        <form>
          <TextField
            name='login'
            label='Login'
            type='text'
            fullWidth
            margin='normal'
            variant='outlined'
          />
          <TextField
            name='password'
            label='Password'
            type='password'
            fullWidth
            margin='normal'
            variant='outlined'
          />
          <Box my={2}>
            <Button
              color='primary'
              disabled={false}
              fullWidth
              size='large'
              type='button'
              variant='contained'
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  )
}

export default Login
