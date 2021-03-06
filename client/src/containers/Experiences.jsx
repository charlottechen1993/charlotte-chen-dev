import React, { useState, useEffect } from 'react';
import { DateTime } from "luxon";
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Container } from '@material-ui/core';
import { uniqueId, startCase, toLower } from 'lodash';

const Experiences = ({
    innerRef
}) => {
    const [experiences, updateExperiences] = useState([]);
    const { t } = useTranslation();
    
    useEffect(() => {
        fetch('/api/experiences')
            .then((res) => res.json())
            .then((newEx) => updateExperiences(newEx));
    }, []);

    return (
        <div className="experiences-container" ref={innerRef}>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <h1>{startCase(toLower(t('Nav.Experiences')))}</h1>
                    <div>
                        {experiences.map((experience) => (
                            <div key={uniqueId()}>
                                <div className="experience-heading-wrapper">
                                    <Typography component="h2" variant="h6">{experience.company} - {experience.role}</Typography>
                                    <Typography variant="body1">
                                        {experience.is_current
                                            ? `${DateTime.fromISO(experience.start_date).toFormat('LLL. yyyy')} - Present`
                                            : `${DateTime.fromISO(experience.start_date).toFormat('LLL. yyyy')} - ${DateTime.fromISO(experience.end_date).toFormat('LLL. yyyy')}`}
                                    </Typography>
                                </div>
                                <ul>
                                    { experience.descriptions.map((description) =>
                                        <li key={uniqueId()}>{description}</li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Container>
        </div>
        
    )
}

export default Experiences;