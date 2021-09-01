import React from 'react';
import Fade from 'react-reveal/Fade'
import '../styles/header.css'

const Header = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom>
                        <h2>
                            Hi, I'm Emma Mattner
                            <span role="img" aria-label="Emoji">
                                👋
                </span>
                        </h2>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>
                                I am an aspiring web delveloper.
                            </h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p> I am currently studying front and back end full stack web development at the University of Adelaide.</p>
                    </Fade>
                </div>
            </div>
        </div>
    );

}

export default Header