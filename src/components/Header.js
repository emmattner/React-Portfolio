import React from 'react';
import Fade from 'react-reveal/Fade'
import '../styles/header.css'

const Header = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom>
                        <h2 className='name-header'>
                            Hi, I'm Emma Mattner
                            <span role="img" aria-label="Emoji">
                                👋
                </span>
                        </h2>
                    </Fade>
                </div>
            </div>
        </div>
    );

}

export default Header