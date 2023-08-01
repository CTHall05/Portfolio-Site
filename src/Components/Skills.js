import React from 'react';
import HTML from '../Images/html.png';
import CSS from '../Images/css.png';
import JS from '../Images/js.png';
import TypeScript from '../Images/ts.png';
import RT from '../Images/react.png';
import Node from '../Images/node.png';
import '@fontsource/roboto';

export default function Skills() {
  return (
    <section className="skills-container">
      <div className="skill-description-card">
        <h2>Skills:</h2>
      </div>
      <div className="skill-icons-Names-card-container">
        <div className="skills-divs">
          <h3>HTML</h3>
          <img src={HTML} alt="An icon of HTML" />
        </div>
        <div className="skills-divs">
          <h3>CSS</h3>
          <img src={CSS} alt="An icon of CSS" />
        </div>
        <div className="skills-divs">
          <h3>JavaScript</h3>
          <img src={JS} alt="An icon of Javascript" />
        </div>
        <div className="skills-divs">
          <h3>TypeScript</h3>
          <img src={TypeScript} alt="An icon of TypeScript" />
        </div>
        <div className="skills-divs">
          <h3>React</h3>
          <img src={RT} alt="An icon of React" />
        </div>
        <div className="skills-divs">
          <h3>Node</h3>
          <img src={Node} alt="An icon of Node" />
        </div>
      </div>
    </section>
  );
}
