import React from 'react';
import Headshot from '../Images/profilepicture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '@fontsource/roboto';
import '../../src/App.css';
import CV from '../../src/Taylor Hall - Developer CV .pdf';

export default function AboutMe() {
  return (
    <section id="about" className="aboutme-section">
      <div className="card">
        <div className="aboutspecs-container">
          <button className="buttonStyleResume">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="a-style"
            >
              Download Resume
            </a>
          </button>
          <h1>
            Hello, <span className="myname">I'm Taylor,</span>
            <br />
            Full Stack Developer.
          </h1>
          <h3>
            {' '}
            <span className="techName">Node.js</span> and{' '}
            <span className="techName">React</span> Developer with a passion for
            test-driven development, honing my skills with Jest and Cypress.
            Currently, I'm expanding my{' '}
            <span className="techName">JavaScript</span> knowledge by learning
            <span className="techName"> TypeScript.</span>
          </h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/charlestaylorhall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://github.com/CTHall05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.instagram.com/tailshall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </div>
        </div>
        <img className="aboutme-image" src={Headshot} alt="Taylor Hall" />
      </div>
    </section>
  );
}
