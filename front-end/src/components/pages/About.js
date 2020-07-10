import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../redux/actions'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function About () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('About'))
    dispatch(setSelectedButton('About'))
  })

  return (
    <React.Fragment>
      <Typography variant="h3">Hello!</Typography>
      <Typography variant="body1">
        I am a software developer mainly working in a full-stack role. Currently
        living in NYC. Likes eating ramen and fried chicken. Plays the guitar at
        night when everyone is asleep. Avid fps/moba gamer. Occasionally stream
        games on
        <Link
          href="https://twitch.tv/scher_w"
          target="_blank"
          underline="always"
          color="inherit"
        >
          Twitch
        </Link>
        . I'm also wokring on my side projects whenever I have free time and
        dabbles on new frameworks that are gaining traction in the tech world.
      </Typography>
    </React.Fragment>
  )
}

export default About
