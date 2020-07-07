import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkTheme } from '../../reducer/actions'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function DarkModeSwitch () {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  return (
    <FormControlLabel
      control={
        <Switch
          checked={darkMode}
          onChange={() => dispatch(toggleDarkTheme())}
        />
      }
      label="Dark Mode"
      labelPlacement="start"
    ></FormControlLabel>
  )
}

export default DarkModeSwitch
