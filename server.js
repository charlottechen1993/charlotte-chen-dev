const express = require('express');

const app = express();

app.get('/api/roles', (req, res) => {
    const roles = [
        "Software Engineer",
        "Photographer"
    ];

    res.json(roles);
});

app.get('/api/experiences', (req, res) => {
    const experiences = [
        {
            company: "Booz Allen Hamilton (Recreation.gov)",
            role: "Lead Frontend Developer",
            descriptions: [
                "Facilitates frontend development and continuous delivery efforts for the new www.recreation.gov.",
                "Refactored the site’s most computationally complex availability/booking grid component, which resulted in a 10-time performance improvement per user interaction with the grid.",
                "Pioneered the incorporation of RxJS and redux-observable into the project’s frontend tech stack. Presented the experience to the project team, and wrote a knowledge-based paper on the topic, which was shared across the company’s engineering teams.",
                "Primary developer of the camping order details form, availability/booking grid, and the internal camping inventory and reservation management systems.",
                "Hosts bi-weekly frontend guild meetings for the project."
            ],
            is_current: true
        },
        {
            company: "Booz Allen Hamilton (DASH)",
            role: "Lead Frontend Developer",
            descriptions: [
                "Led frontend development efforts for one of NIH’s data sharing platforms (https://dash.nichd.nih.gov) using ReactJS, Redux, Redux-Form, Bootstrap, Sass, and C#",
                "Served as the primary developer and designer for the study information page and study request form."
            ],
            is_current: false
        }
    ];

    res.json(experiences);
});

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});