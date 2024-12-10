import React from 'react';
import './studies.scss';

const Studies = () => {
    const educationData = [
        {
            degree: "Master In CSE",
            university: "Cambridge University",
            years: "2000 - 2050",
            description: "Your description here..."
        },
        {
            degree: "classe préparatoire",
            university: "Casablanca",
            years: "2010 - 2020",
            description: "Your description is..."
        },
    ];
    return (
        <div className='education'>
            <h2>My Education</h2>
            {educationData.map((edu, index) => (
                <div key={index}  className="education-entry">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.university}</h4>
                    <p> {edu.years} </p>
                    <p> {edu.description} </p>
                </div>
            ))}


        </div>
    )
}

export default Studies
