import React from 'react';
import {
    Grid,
    Box,
    Container
} from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import { startCase, toLower } from 'lodash';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container" id="about-container">
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <h1>{startCase(toLower(t('Nav.About')))}</h1>
                    <Box color="text.primary">
                        <p>
                            {t('About.1')}
                        </p>
                        <p>
                            {t('About.2')}
                        </p>
                        <p>
                            {t('About.3')}
                        </p>
                    </Box>
                </Grid>    
            </Container>
        </div>
    )
}

export default About;