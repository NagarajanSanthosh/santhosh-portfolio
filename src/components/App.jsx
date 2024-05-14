import React, { useState, useEffect } from 'react';
import '../index.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Intro from './Intro';
import ParticlesComponent from './particlesjs.jsx';

const App = () => {
    const [isVisibleAbout, setIsVisibleAbout] = useState(false);
    const [isVisibleSkills, setIsVisibleSkills] = useState(false);
    const [isVisibleProjects, setIsVisibleProjects] = useState(false);
    const [isVisibleContact, setIsVisibleContact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const aboutPosition = document.getElementById('about').offsetTop;
            const skillsPosition = document.getElementById('skills').offsetTop;
            const projectsPosition = document.getElementById('projects').offsetTop;
            const contactPosition = document.getElementById('contact').offsetTop;
            setIsVisibleAbout(scrollPosition > aboutPosition);
            setIsVisibleSkills(scrollPosition > skillsPosition);
            setIsVisibleProjects(scrollPosition > projectsPosition);
            setIsVisibleContact(scrollPosition > contactPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='App container'>
            <ParticlesComponent id="particles" />
            <div className='alltextblack'>
                <div className='content-container'>
                    <Navbar />
                </div>
                <main>
                    <div className='content-container'>
                        <div id='intro'>
                            <Intro />
                        </div>
                        <div id='about' className={`content ${isVisibleAbout ? 'visible' : ''} slide-up`}>
                            <About />
                        </div>
                        <div id='skills' className={`content ${isVisibleSkills ? 'visible' : ''} slide-left-to-right`}>
                            <Skills />
                        </div>
                        <div id='projects' className={`content ${isVisibleProjects ? 'visible' : ''} slide-right-to-left`}>
                            <Projects />
                        </div>
                        <div id='contact' className={`content ${isVisibleContact ? 'visible' : ''} slide-down`}>
                            <Contact />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
