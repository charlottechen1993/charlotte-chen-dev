import React, { useState } from 'react';
import clsx from 'clsx';
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
    IconButton,
    Drawer,
    Divider,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import {
    Menu,
    ChevronLeft,
    ChevronRight,
    MoveToInbox,
    Mail
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

import Home from '../containers/Home';
import About from '../containers/About';
import Experiences from '../containers/Experiences';

import useWindowSize from '../hooks/useWindowSize';
import useStyles from '../hooks/useStyles';

const NavBar = () => {
    const { width } = useWindowSize();
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <AppBar
                position="static"
                color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6">
                        Charlotte Chen
                    </Typography>
                    { width > 900 
                        ? (
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
                        )
                        : (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}
                            >
                                <Menu />
                            </IconButton>
                        )
                    }
                </Toolbar>

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
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Router>
    )
}

export default NavBar;