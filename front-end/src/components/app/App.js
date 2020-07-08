import React from 'react'
import { useSelector } from 'react-redux'
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../nav/NavBar'
import Footer from '../footer/Footer'

function App () {
  const darkMode = useSelector((state) => state.darkMode)

  let theme = createMuiTheme({
    root: {
      display: 'flex'
    },
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  })
  theme = responsiveFontSizes(theme)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
