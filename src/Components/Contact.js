import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "@fontsource/roboto";
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
      After witnessing technology's impact during Covid, I pursued a career change. After self-teaching myself coding basics I then enrolled in a 16-week coding bootcamp, focusing on Full Stack Development. The program covered HTML, CSS, JavaScript, React, NodeJS, PostgreSQL, Jest, and Cypress for testing. With a background in aviation, I possess strong communication and collaboration skills, alongside valuable technical expertise. If interested, please contact me to discuss how I can contribute to your team.
      </p>
    </section>
  );
}
