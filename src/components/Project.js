import React from 'react';
import Card from './Card';
import Fade from "react-reveal/Fade";
import '../styles/project.css';

import data from './my-work'


const Project = () => {
    return (
        <div className="section" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>My Work</h1>
                    </Fade>

                    <div className="grid">
                        <Fade bottom cascade>
                            {data.projects.map((project, index) => (
                                <Card
                                    key={index}
                                    heading={project.title}
                                    paragraph={project.para}
                                    imgUrl={project.img}
                                    projectLink={project.url}
                                ></Card>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project