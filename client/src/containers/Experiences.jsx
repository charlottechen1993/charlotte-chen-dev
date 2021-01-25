import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
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
            <div>
                {experiences.map((experience) => (
                    <>
                    <div className="experience-heading-wrapper">
                        <Typography key={uniqueId()} component="h2" variant="h6">{experience.company} - {experience.role}</Typography>
                        <Typography variant="body1">
                            {experience.is_current
                                ? `${moment(experience.start_date).format('LL')} - Present`
                                : `${moment(experience.start_date).format('LL')} - ${moment(experience.end_date).format('LL')}`}
                        </Typography>
                    </div>
                    <ul>
                        { experience.descriptions.map((description) =>
                            <li key={uniqueId()}>{description}</li>
                        )}
                    </ul>
                    </>
                ))}
            </div>
        </Grid>
    )
}

export default Experiences;