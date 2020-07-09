import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

function convertDate (date) {
  const newDate = new Date(date)
  return (
    newDate.getMonth() + '/' + newDate.getDay() + '/' + newDate.getFullYear()
  )
}

export default function MediaCard (props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={props.url} target="_blank" color="inherit">
          <CardMedia
            className={classes.media}
            image={props.image}
            title="View on GitHub"
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography noWrap gutterBottom variant="h5" display="block">
          {props.name}
          <Typography
            noWrap
            variant="caption"
            display="block"
            color="textSecondary"
          >
            created: {convertDate(props.createDate)}
          </Typography>
        </Typography>
        <Typography noWrap variant="body1" color="textSecondary" component="p">
          {props.description === null ? 'No description' : props.description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Link component={Button} href={props.url} target="_blank">
            GitHub
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
