import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Home from './containers/Home';
import About from './containers/About';
import Experiences from './containers/Experiences';

function App() {
    return (
        <Router>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6">
                        Charlotte Chen
                    </Typography>

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
                </Toolbar>
            </AppBar>

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
            </div>
        </Router>
    );
}

export default App;
