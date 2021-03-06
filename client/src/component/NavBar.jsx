import React, { useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { toUpper } from 'lodash';
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
    ClickAwayListener,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import {
    Menu,
    Home as HomeIcon,
    PersonOutline as PersonOutlineIcon,
    WorkOutline as WorkOutlineIcon,
    Code as CodeIcon,
    ChevronLeft,
    ChevronRight
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

import Home from '../containers/Home';
import About from '../containers/About';
import Experiences from '../containers/Experiences';
import Projects from '../containers/Projects';

import useWindowSize from '../hooks/useWindowSize';
import useStyles from '../hooks/useStyles';

import { MOBILE_BREAKPOINT } from '../constants/breakpoints';
import { uniqueId, isEmpty } from 'lodash';

const NavBar = () => {
    const { width } = useWindowSize();
    const classes = useStyles();
    const theme = useTheme();
    const { t } = useTranslation();

    const menuItems = [
        {
            id: '',
            label: t('Nav.Home'),
            icon: <HomeIcon />,
            component: <Home />
        },
        {
            id: 'about',
            label: t('Nav.About'),
            icon: <PersonOutlineIcon />,
            component: <About />
        },
        {
            id: 'experiences',
            label: toUpper(t('Nav.Experiences')),
            icon: <WorkOutlineIcon />,
            component: <Experiences />
        },
        {
            id: 'projects',
            label: toUpper(t('Nav.Projects')),
            icon: <CodeIcon />,
            component: <Projects />
        }
    ];

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
                position="fixed"
                color="transparent">
                <Toolbar>
                    <Typography
                        variant="body1">
                        CharlotteChen.dev
                    </Typography>
                    { width > MOBILE_BREAKPOINT
                        ? (
                            <div>
                                { menuItems.map((item) => (
                                     <Link key={uniqueId()} to={`/${item.id}`}>
                                        <Button color="inherit">
                                            {item.label}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        )
                        : (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}>
                                <Menu />
                            </IconButton>
                        )
                    }
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <Switch>
                { menuItems.slice().reverse().map((item) => (
                    <Route
                        path={isEmpty(item.id) ? "/" : `/${item.id}`}
                        key={item.label}>
                        {item.component}
                    </Route>
                ))}
            </Switch>
            <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handleDrawerClose}>
                <Drawer
                    className={`${classes.drawer} app-drawer`}
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
                        { menuItems.map((item) => (
                            <Link key={item.label} to={`/${item.id}`}>
                                <ListItem button key={item.label}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </ClickAwayListener>
        </Router>
    )
}

export default NavBar;