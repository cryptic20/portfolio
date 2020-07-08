import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import DarkModeSwitch from './DarkModeSwitch'
import Grid from '@material-ui/core/Grid'

function ExternalLinks () {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <DarkModeSwitch />
        <Tooltip title="GitHub Profile">
          <IconButton
            aria-label="GitHub Profile Link"
            href="https://github.com/cryptic20"
            target="_bank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn Profile">
          <IconButton
            aria-label="LinkedIn Profile Link"
            href="https://www.linkedin.com/in/sherwin-wyco"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="send email">
          <IconButton
            aria-label="send email"
            href="mailto:sherwin.wyco@gmail.com"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  )
}

export default ExternalLinks
