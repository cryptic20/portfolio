import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkTheme } from '../../reducer/actions'
import Switch from '@material-ui/core/Switch'

function DarkModeSwitch () {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  return (
    <Switch
      checked={darkMode}
      onChange={() => dispatch(toggleDarkTheme())}
    ></Switch>
  )
}

export default DarkModeSwitch
