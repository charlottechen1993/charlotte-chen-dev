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
            company: "Recreation.gov (Booz Allen Hamilton)",
            role: "Lead Frontend Developer",
            descriptions: [
                "Facilitates frontend development and continuous delivery efforts for the new www.recreation.gov.",
                "Refactored the site’s most computationally complex availability/booking grid component, which resulted in a 10-time performance improvement per user interaction with the grid.",
                "Pioneered the incorporation of RxJS and redux-observable into the project’s frontend tech stack. Presented the experience to the project team, and wrote a knowledge-based paper on the topic, which was shared across the company’s engineering teams.",
                "Primary developer of the camping order details form, availability/booking grid, and the internal camping inventory and reservation management systems.",
                "Hosts bi-weekly frontend guild meetings for the project."
            ],
            url: "https://www.recreation.gov/",
            start_date: new Date('2018/2'),
            end_date: null,
            is_current: true
        },
        {
            company: "DASH (Booz Allen Hamilton)",
            role: "Lead Frontend Developer (Camping Team)",
            descriptions: [
                "Led frontend development efforts for one of NIH’s data sharing platforms (https://dash.nichd.nih.gov) using ReactJS, Redux, Redux-Form, Bootstrap, Sass, and C#",
                "Served as the primary developer and designer for the study information page and study request form."
            ],
            url: "https://dash.nichd.nih.gov/",
            start_date: new Date('2017/2'),
            end_date: new Date('2018/2'),
            is_current: false
        },
        {
            company: "DFAS (Booz Allen Hamilton)",
            role: "Developer",
            descriptions: [
                "Configured the SharePoint 2013 environment for the agency’s new employee membership portal.",
                "Designed and developed pages and features via HTML, CSS, XSL, and jQuery in SharePoint Designer."
            ],
            url: "https://dash.nichd.nih.gov/",
            start_date: new Date('2016/9'),
            end_date: new Date('2017/2'),
            is_current: false
        },
        {
            company: "Pittsburgh Quantum Institute",
            role: "Web Developer",
            descriptions: [
                "Assist with the frontend development of the new Pittsburgh Quantum Institute (PQI) website by proposing and implementing user-friendly layout designs and interactions"
            ],
            url: "https://dash.nichd.nih.gov/",
            start_date: new Date('2015/9'),
            end_date: new Date('2016/4'),
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
            url: "http://charlottechen.dev",
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
            url: "https://pittfashionshare.appspot.com",
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