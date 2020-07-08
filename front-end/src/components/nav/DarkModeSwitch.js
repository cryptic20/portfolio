import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkTheme } from '../../redux/actions'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
function DarkModeSwitch () {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  return (
    <Tooltip title="Toggle Dark/Light theme">
      <IconButton
        aria-label="switch to dark/light theme"
        onClick={() => dispatch(toggleDarkTheme())}
      >
        {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default DarkModeSwitch
