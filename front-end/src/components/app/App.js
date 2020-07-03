import React from 'react'
import Container from '@material-ui/core/Container'
import { ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../nav/NavBar'

function App () {

  const isDark = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = React.useState(JSON.parse(isDark));

 const toggleMode = () => {
   setDarkMode(!darkMode)
   localStorage.setItem("darkMode", !darkMode)

 }

    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: darkMode ? 'dark' : 'light',
          },
        }),
      [darkMode],
    );
  return (
   <Container>
   <ThemeProvider  theme={theme}>
      <CssBaseline/>
      </ThemeProvider>
        <NavBar />
            <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleMode} />}
             label="dark"
           />
   </Container>
  )
}

export default App
