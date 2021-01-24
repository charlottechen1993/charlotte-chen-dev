import React, { useEffect, useState } from 'react';
import {
    Grid
} from '@material-ui/core'

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
        </Grid>
    )
}

export default About;