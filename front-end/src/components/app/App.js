import React from 'react'
import Container from '@material-ui/core/Container'
import { ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../nav/NavBar'

function App () {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev
    );

  };
  const prefersDarkMode = checked;
    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );
  return (
   <Container>
   <ThemeProvider  theme={theme}>
      <CssBaseline/>
      </ThemeProvider>
        <NavBar />
            <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
             label="dark"
           />
   </Container>
  )
}

export default App
