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
            url: "https://www.recreation.gov/",
            is_current: true
        },
        {
            company: "Booz Allen Hamilton (DASH)",
            role: "Lead Frontend Developer",
            descriptions: [
                "Led frontend development efforts for one of NIH’s data sharing platforms (https://dash.nichd.nih.gov) using ReactJS, Redux, Redux-Form, Bootstrap, Sass, and C#",
                "Served as the primary developer and designer for the study information page and study request form."
            ],
            url: "https://dash.nichd.nih.gov/",
            is_current: false
        }
    ];

    res.json(experiences);
});

app.get('/api/social', (req, res) => {
    const social = [
        {
            name: "GitHub",
            url: "https://github.com/charlottechen1993"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/charlotte-chen-b6200781/"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/charlottechen1993/"
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UCdk6ju88YCkOkb3XFved7OA"
        }
    ]

    res.json(social);
});

app.get('/api/projects', (req, res) => {
    const projects = [
        {
            name: "charlottechen.dev",
            url: "www.charlottechen.dev",
            tech: [
                "React",
                "NodeJS",
                "ExpressJS",
                "HTML",
                "Sass"
            ]
        },
        {
            name: "Pitt Fashion Share",
            url: "www.pittfashionshare.appspot.com",
            tech: [
                "AngularJS",
                "Python",
                "HTML",
                "CSS",
                "Bootstrap"
            ]
        }
    ]

    res.json(projects);
});


const port = process.env.PORT || 5000; // if heroku doesn't have port 5000, use whatever is available


if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});