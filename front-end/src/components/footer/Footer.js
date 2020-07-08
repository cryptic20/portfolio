import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: 10,
    textAlign: 'center'
  }
}))

function Footer () {
  const classes = useStyles()
  return (
    <Typography variant="subtitle2" className={classes.footer}>
      Made with React + Material-UI
    </Typography>
  )
}

export default Footer
