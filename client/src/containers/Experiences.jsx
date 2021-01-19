import React, { useState, useEffect } from 'react';

const Experiences = () => {
    const [experiences, updateExperiences] = useState([]);
    
    useEffect(() => {
        fetch('/api/experiences')
            .then((res) => res.json())
            .then((newEx) => updateExperiences(newEx));
    }, []);

    return (
        <div>
            <ul>
                {experiences.map((experience) => (
                    <li>
                        {experience.company} - {experience.role}
                        <ul>
                            { experience.descriptions.map((description) => <li>{description}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experiences;