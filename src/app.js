import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Project/>
            <Footer/>
        </div>
    );
}

export default App;