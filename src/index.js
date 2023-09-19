import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import '../src/App.css';
import '@fontsource/roboto';
import HeaderImage from '../src/Images/thIcon.png';

const App = () => {
  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header className="header">
        <img className="intialsIcon" src={HeaderImage} alt="myIcon" />
        <div className="header-text-container">
          <a href="About" onClick={(e) => handleLinkClick(e, '#about')}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
            Contact Me
          </a>
        </div>
      </header>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Skills></Skills>
      <MyProjects></MyProjects>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
