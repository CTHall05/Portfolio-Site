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
          <h1 className="myname">Designer, FrontEnd Developer & Aviator</h1>
          <h3> I love to design and implement coding ideas and learn!</h3>
          <img className="aboutme-image" src={Headshot} alt="Taylor Hall" />
          <div className="social-icons">
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
      </div>
    </section>
  );
}
