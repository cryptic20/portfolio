import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../nav/NavBar'

function App () {
  const isDark = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = React.useState(JSON.parse(isDark))

  const toggleMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode]
  )
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Switch checked={darkMode} onChange={toggleMode} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
