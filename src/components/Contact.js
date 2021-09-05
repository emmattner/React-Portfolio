import React from 'react';
import Fade from 'react-reveal/Fade'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div id="contact" className="contact-me">
        <div className="section" id="about">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>
                            Contact Me.
                            </h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p> Email: <a href="mailto:emattner1997@gmail.com">emattner1997@gmail.com</a></p>
                        <p> Phone: <a href="tel:0439366226" >0439366226</a></p>
                        <p> <a href="https://github.com/emmattner">Github</a></p>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Contact