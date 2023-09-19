import React from 'react';
import '@fontsource/roboto';

export default function Skills() {
  return (
    <section className="skills-container">
      <div className="skill-description-card">
        <h2 className="skill-h2">Full Stack Developer</h2>
        <div className="skill-column">
          <h3 className="skill-h3">Languages</h3>
          <p>
            HTML, CSS, JavaScript, React,
            <br />
            Node.js, Git, PostgreSQL
          </p>
          <h3 className="skill-h3">Dev Tools:</h3>
          <ul className="skill-list">
            <li>Github</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
