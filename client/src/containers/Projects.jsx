import React, { useState, useEffect } from 'react';
import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton
} from '@material-ui/core';
import {
    Link as LinkIcon
} from '@material-ui/icons';
import useWindowSize from '../hooks/useWindowSize';
import useStyles from '../hooks/useStyles';
import placeholder from '../images/placeholder.png';
import {
    LARGE_DESKTOP_BREAKPOINT,
    DESKTOP_BREAKPOINT,
    PORTRAIT_TABLET_BREAKPOINT
} from '../constants/breakpoints';

const Projects = () => {
    const { width } = useWindowSize();
    const classes = useStyles();
    const [projects, updateProjects] = useState([]);
    const [columns, updateCol] = useState(2);
    
    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((newProjects) => updateProjects(newProjects));
    }, []);

    useEffect(() => {
        let newColumns = 1;

        console.log()
        if (width > LARGE_DESKTOP_BREAKPOINT) {
            newColumns = 4;
        }
        else if (width > DESKTOP_BREAKPOINT) {
            newColumns = 3;
        }
        else if (width > PORTRAIT_TABLET_BREAKPOINT) {
            newColumns = 2;
        }

        updateCol(newColumns);
    }, [width]);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="projects-container">
            <h1>Personal Projects</h1>
            <GridList
                cellHeight={180}
                className={classes.gridList}
                cols={columns}>
                { projects.map((project) => (
                    <GridListTile key={project.name}>
                        <img src={placeholder} alt={project.name} />
                        <GridListTileBar
                            title={project.name}
                            actionIcon={
                                <a rel={'external noreferrer'} href={project.url} target='_blank'>
                                    <IconButton
                                        aria-label={`go to ${project.name}`}
                                        className={classes.icon}>
                                        <LinkIcon />
                                    </IconButton>
                                </a>
                            } />
                    </GridListTile>
                ))}
            </GridList>
        </Grid>
    )
}

export default Projects;