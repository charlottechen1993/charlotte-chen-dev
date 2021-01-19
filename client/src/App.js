import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    AppBar,
    Typography,
    Toolbar,
    Button,
    ThemeProvider,
    Container
} from '@material-ui/core'
import Home from './containers/Home';
import About from './containers/About';
import Experiences from './containers/Experiences';

import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';


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
            <Router>
                <AppBar
                    position="static"
                    color="transparent">
                    <Toolbar>
                        <Typography
                            variant="h6">
                            Charlotte Chen
                        </Typography>

                        <div>
                            <Link to="/">
                                <Button color="inherit">
                                    Home
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button color="inherit">
                                    About
                                </Button>
                            </Link>
                            <Link to="/experiences">
                                <Button color="inherit">
                                Experiences
                                </Button>
                            </Link>
                        </div>
                        
                    </Toolbar>
                </AppBar>
                <Container>
                    <Switch>
                        <Route path="/experiences">
                            <Experiences />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
