import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  header: {
    padding: 8
  }
}))

function NavHeader () {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Grid container direction="column" alignItems="center">
        <Avatar alt="Sherwin Wyco" className={classes.large} />
        <div style={{ paddingBottom: 16 }} />
        <Typography variant="h6" noWrap>
          Sherwin Wyco
        </Typography>
        <Typography variant="subtitle1" noWrap gutterBottom>
          sherwin.wyco@gmail.com
        </Typography>
      </Grid>
    </div>
  )
}

export default NavHeader
