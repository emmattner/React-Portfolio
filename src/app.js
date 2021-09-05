import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Project from './components/Project';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navigation/>
            <Header/>
            <AboutMe/>
            <Project/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;