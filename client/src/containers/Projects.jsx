import React, { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton
} from '@material-ui/core';
import {
    Info as InfoIcon
} from '@material-ui/icons';
import useStyles from '../hooks/useStyles';

const Experiences = () => {
    const classes = useStyles();
    const [projects, updateProjects] = useState([]);
    
    useEffect(() => {
        fetch('/api/experiences')
            .then((res) => res.json())
            .then((newProjects) => updateProjects(newProjects));
    }, []);

    return (
        <div className="projects-container">
            <GridList cellHeight={180} className={classes.gridList}>
                { projects.map((project) => (
                    <GridListTile key={uniqueId()}>
                        {/* <img src={tile.img} alt={tile.title} /> */}
                        <GridListTileBar
                            title={project.name}
                            actionIcon={
                                <IconButton aria-label={`info about ${project.name}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            } />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default Experiences;