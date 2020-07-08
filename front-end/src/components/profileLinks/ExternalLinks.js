import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

function ExternalLinks () {
  return (
    <React.Fragment>
      <IconButton>
        <Link
          href="https://www.github.com/cryptic20"
          target="_blank"
          color="inherit"
        >
          <Tooltip title="GitHub Profile" aria-label="GitHub Profile">
            <GitHubIcon />
          </Tooltip>
        </Link>
      </IconButton>
      <IconButton>
        <Link
          href="https://www.linkedin.com/in/sherwin-wyco"
          target="_blank"
          color="inherit"
        >
          <Tooltip title="LinkedIn Profile" aria-label="LinkedIn Profile">
            <LinkedInIcon />
          </Tooltip>
        </Link>
      </IconButton>
      <IconButton>
        <Link
          href="mailto:sherwin.wyco@gmail.com"
          target="_blank"
          color="inherit"
        >
          <Tooltip title="send mail" aria-label="send mail">
            <MailOutlineIcon />
          </Tooltip>
        </Link>
      </IconButton>
    </React.Fragment>
  )
}

export default ExternalLinks
