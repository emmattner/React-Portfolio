import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/resume.css';

import emmasResumePng from '../assets/emmas-resume.png';

const Resume = () => {
    return (
        <div id='resume' className='resume' >
        <Fade bottom cascade>
                        <div>
                            <h1>
                                Resume.
                            </h1>
                        </div>
                        <br></br>
                    </Fade>
                    <Fade bottom>
                    <div>
                    <img src={emmasResumePng} alt=""/>
                    </div>
                    </Fade>
        </div>

    );
}

export default Resume