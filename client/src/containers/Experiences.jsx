import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { uniqueId } from 'lodash';

const Experiences = () => {
    const [experiences, updateExperiences] = useState([]);
    
    useEffect(() => {
        fetch('/api/experiences')
            .then((res) => res.json())
            .then((newEx) => updateExperiences(newEx));
    }, []);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="experiences-container">
            <h1>Experiences</h1>
            <ul>
                {experiences.map((experience) => (
                    <li key={uniqueId()}>
                        {experience.company} - {experience.role}
                        <ul>
                            { experience.descriptions.map((description) =>
                                <li key={uniqueId()}>{description}</li>
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </Grid>
    )
}

export default Experiences;