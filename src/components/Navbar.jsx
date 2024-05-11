import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import '../main.css'


const Navbar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        showNavBar(); // Close the navbar after clicking on a link
    };
    return (
        <header>
            <div className='nav-container'>
                <h1 className='name fw-bold'>Santhosh N</h1>
            </div>
            <nav ref={navRef}>
                <a href='/#' onClick={() => scrollToSection('about')}>About</a>
                <a href='/#' onClick={() => scrollToSection('skills')}>Skills</a>
                <a href='/#' onClick={() => scrollToSection('project')}>Project</a>
                <a href='/#' onClick={() => scrollToSection('contact')}>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar