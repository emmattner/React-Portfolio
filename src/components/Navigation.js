import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/navigation.css';

const Navigation = () => {
    return(
    <div className="section">
    <div className="container">
        <div className="navbar-wrapper">
            <div
                role="button"
                onClick={() => scrollTo("#home")}
                className="name"
                tabIndex={0}
            >
                My Portfolio.
    </div>
            <div className="links-wrapper">
                <button onClick={() => scrollTo("#work")}>Work</button>
                <button onClick={() => scrollTo("#about")}>About Me</button>
                <button onClick={() => scrollTo("#resume")}>Resume</button>
                <button onClick={() => scrollTo("#contact")}>Contact</button>
            </div>
        </div>
    </div>
</div>
    );
    }


export default Navigation