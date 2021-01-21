import React from 'react';
import {
    Grid,
    IconButton
} from '@material-ui/core';
import {
    GitHub,
    Facebook,
    Instagram,
    LinkedIn
} from '@material-ui/icons';

const Home = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <h1>Hi, I'm Charlotte</h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <IconButton href="https://github.com/charlottechen1993" target="_blank"><GitHub fontSize="small" /></IconButton>
                <IconButton href="https://www.linkedin.com/in/charlotte-chen-b6200781/" target="_blank"><LinkedIn fontSize="small" /></IconButton>
                <IconButton href="https://www.instagram.com/charlottechen1993/" target="_blank"><Instagram fontSize="small" /></IconButton>
            </Grid>
        </Grid>
        
    )
}

export default Home;