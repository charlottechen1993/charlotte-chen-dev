import "./App.scss";
import {
    ThemeProvider
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import NavBar from './component/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[500],
      dark: blueGrey[900],
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
        </ThemeProvider>
    );
}

export default App;
