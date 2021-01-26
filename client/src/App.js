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
      light: "#8B9F7B",
      main: "#8B9F7B",
      dark: "#8B9F7B",
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
