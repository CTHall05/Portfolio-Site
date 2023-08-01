import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './Components/AboutMe';
import AboutMeButtons from './Components/AboutMeButtons';
import Skills from './Components/Skills';
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import '../src/App.css';
import '@fontsource/roboto';

const App = () => {
  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-text-container">
          <a href="About" onClick={(e) => handleLinkClick(e, '#about')}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
            Contact
          </a>
        </div>
      </header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <AboutMeButtons></AboutMeButtons>
      <Contact></Contact>
      <section className="section-separator"></section>
      <MyProjects></MyProjects>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
