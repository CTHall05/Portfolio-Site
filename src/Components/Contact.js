import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
        After seeing the impact that technology had on the world during Covid, I decided I wanted a career change.
        I gradually taught myself some coding basics before deciding to take a coding bootcamp for a more structured approach.<br />
        It was a 16-week program where we focused on Full Stack Development. <br/>We learnt about technologies such as HTML, CSS, JavaScript, React, NodeJS, PostgreSQL, and testing libraries such as Jest and Cypress.
      </p>
      <p className='contact-story'>It was an incredible experience and I feel that I bring alot of great tech skills as well as soft skills to the table.
      Coming from an aviation background I have great communication skills as well as a strong ability to connect and collaborate with my teamates. If you think I would be a good fit for your team please contact me, I'd love to talk.
      </p>
    </section>
  );
}
