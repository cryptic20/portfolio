import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 180

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    top: 'auto',
    bottom: 0
  },
  footer: {
    textAlign: 'center'
  }
}))

function Footer () {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Typography variant="subtitle1" className={classes.footer}>
        © Copyright 2020
      </Typography>
    </AppBar>
  )
}

export default Footer
