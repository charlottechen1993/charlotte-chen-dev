import React, { useEffect, useState } from 'react';
import {
    Grid
} from '@material-ui/core'
import profileImage from '../images/profile.jpg';

const About = () => {
    const [about, updateAbout] = useState({});
    
    useEffect(() => {
        fetch('/api/about')
            .then((res) => res.json())
            .then((newRes) => updateAbout(newRes));
    }, []);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <h1>About Me</h1>
            <p>
                {about.description}
            </p>
            <img src={profileImage} alt="profile" />
        </Grid>
    )
}

export default About;