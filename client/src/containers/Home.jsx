import React, { useEffect, useState } from 'react';
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
import { uniqueId } from 'lodash';
import homeImage from '../images/homeImage.png';

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
        "linkedin": LinkedIn
    }

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
                <img src={homeImage} alt="home page" />
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                {social.map((platform) => {
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