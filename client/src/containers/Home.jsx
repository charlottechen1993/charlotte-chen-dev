import React, { useEffect, useState } from 'react';
import {
    Grid,
    IconButton,
    Box
} from '@material-ui/core';
import {
    GitHub,
    Facebook,
    Instagram,
    LinkedIn,
    YouTube
} from '@material-ui/icons';
import { uniqueId } from 'lodash';
import homeImage from '../images/homeImage.png';
import {
    Link
} from "react-router-dom";

const Home = () => {
    const [social, updateSocial] = useState([]);
    
    useEffect(() => {
        fetch('/api/social')
            .then((res) => res.json())
            .then((response) => updateSocial(response));
    }, []);

    const iconMap = {
        "github": GitHub,
        "facebook": Facebook,
        "instagram": Instagram,
        "linkedin": LinkedIn,
        "youtube": YouTube
    }
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="home-container">

            <Box color="text.primary" textAlign="center">
                <h1>Hi, I'm Charlotte</h1>
            </Box>
            
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <img src={homeImage} alt="homepage cartoon" />
            </Grid>

            <Box
                textAlign="center"
                color="text.primary"
                width="90%"
                maxWidth={500}>
                <p>
                    Welcome to my site!
                </p>
                <p>
                    I'm a Software Engineer currently based in Fairfax, VA.
                </p>
                <p>
                    Feel free to check out my <u><Link to="/experiences">experiences</Link></u> and <u><Link to="/projects">projects</Link></u>
                    &nbsp;that I've been doing on the side, or connect with me at the platforms below.
                </p>
            </Box>
            
            
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                { social.map((platform) => {
                    const IconName = iconMap[platform.name.toLowerCase()];
                    return (
                        <IconButton
                            key={uniqueId()}
                            href={platform.url}
                            target="_blank">
                            <IconName fontSize="small" />
                        </IconButton>
                    )
                })}
            </Grid>
        </Grid>
        
    )
}

export default Home;