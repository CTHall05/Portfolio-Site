import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fontsource/roboto';
import ContactImage from '../Images/profileshot.jpg';

export default function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2>My Story</h2>
      <img className="contact-image" src={ContactImage} alt="" />
      <div className="contact-icons">
        <div className="contact-icon">
          <a href="mailto:charlestaylorhall05@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/charlestaylorhall/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <p className="contact-story">
        As a recent Coding Bootcamp Graduate, I focused on mastering React
        Application Development through personal projects and specialized
        courses. My journey into software engineering was inspired by witnessing
        the trans-formative impact of technology in 2020. I believe that with
        the right attitude and a thirst for learning, anyone can thrive in this
        industry. Coming from an aviation background, I embrace collaboration
        and excel in diverse, cross-functional teams.
      </p>
    </section>
  );
}
