import React from 'react';
import {
    Grid,
    Box,
    Container
} from '@material-ui/core'

const About = () => {
    return (
        <div className="about-container">
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <h1>About Me</h1>
                    <Box color="text.primary">
                        <p>
                            Hello, I'm Charlotte Chen, a Software Engineer specialized in frontend development in the past 4 years.
                        </p>
                        <p>
                            Since I was little, I have loved to draw comic stories. Eventually I was exposed to computer softwares,
                            and I began to turn my comics into animation cartoons using Powerpoint and eventually Flash.
                            With an equal passion for computer and art, I declared my major in Computer Science. 
                        </p>
                        <p>
                            The idea of developing is same to drawing: you start with a blank space and the possibilities are limitless.
                            The potential of creating something great constantly motivates
                            me to develop more applications with beautiful and functional interfaces.
                        </p>
                    </Box>
                </Grid>    
            </Container>
        </div>
    )
}

export default About;