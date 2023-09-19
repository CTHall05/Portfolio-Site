import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fontsource/roboto';

export default function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2>Hi, I'm Taylor. Great to meet you.</h2>

      <p className="contact-story">
        Since the beginning of my coding journey, I have loved the potential
        that the world of tech brings, and the problems projects can solve. I am
        looking for my first role in this industry and I have great social
        skills, emotional intellagence and teamwork abilities.
      </p>
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
    </section>
  );
}
