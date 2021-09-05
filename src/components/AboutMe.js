import React from 'react';
import Fade from 'react-reveal/Fade'

const AboutMe = () => {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>
                                About Me.
                            </h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p> I am an aspiring web delveloper and I am currently studying front and back end full stack web development at the University of Adelaide.</p>
                        <p> I find Web devlepment very interesting and with the Trilogy Coding Bootcamp I have completed I learnt so many new skills such as HTML, CSS, REACT and many more.</p>
                        <p> Here you can view some of the work I have produced during my time attending the course, please don't hesitate to contact me if you have any inquiries!</p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMe