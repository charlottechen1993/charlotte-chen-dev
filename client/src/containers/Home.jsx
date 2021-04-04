import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';

const Home = () => {
    const [social, updateSocial] = useState([]);
    const { t, i18n } = useTranslation();
    
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

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="home-container"
            id="home-container">

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
                <p>{t('Home.1')}</p>
                <p>{t('Home.2')}</p>
                <p>
                    Feel free to check out my work <u><Link to="/experiences">experiences</Link></u> and personal <u><Link to="/projects">projects</Link></u>,
                    or connect with me at the platforms below.
                </p>
                <p>
                    Prefer a different language?
                    <button onClick={() => handleClick('en')}>English</button>
                    <button onClick={() => handleClick('chi')}>简体中文</button>
                    <button onClick={() => handleClick('fr')}>Francois</button>
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
                            <IconName fontSize="small" color="secondary" />
                        </IconButton>
                    )
                })}
            </Grid>
        </Grid>
        <About />
        <Experiences />
        <Projects />
        </>
    )
}

export default Home;