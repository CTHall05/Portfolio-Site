import React from 'react';
import Devault from '../Images/devault-image.png';
import Employee from '../Images/employeetracker.png';
import Yoga from '../Images/izzyhallyoga.png';
import '@fontsource/roboto';
import '../App.css';

export default function MyProjects() {
  const projects = [
    {
      title: 'Devault',
      tech: 'Tech: JavaScript, React, PostgreSQL, Node.js',
      description:
        'An application where developers can track an manage their job applications as well as look for job tips and cv assistance.',
      image: Devault,
      repoLink:
        'https://github.com/SchoolOfCode/bc13_final-project_front-end-cyber-insecure',
      deployedLink: 'https://dev-vault.netlify.app/',
    },
    {
      title: 'Employee Tracker',
      tech: 'Node.js, PostgreSQL, Express, React, JavaScript',
      description:
        'An Employee Tracker project where through HTTP requests, routes handles and models, users can create, read, update and delete employees in the database.',
      image: Employee,
      repoLink: 'https://github.com/CTHall05/React--Employee-Tracker-Crud',
      deployedLink: 'https://employee-tracker-crud-cthall05.vercel.app/',
    },
    {
      title: 'Izzy Hall Yoga',
      tech: `React, Node.js, Nodemailer, PostgreSQl`,
      description:
        'A Yoga booking form I created for a local business in Melbourne where the owner can track how many people book onto the yoga classes, I used the Nodemailer module to allow email sending',
      image: Yoga,
      repoLink: 'https://github.com/CTHall05/Izzy-Hall-Yoga',
      deployedLink: 'https://izzy-hall-yoga-jrju-cthall05.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <p>Here are a few projects I have worked on.</p>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-content-container">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      className="project-button-style"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      className="project-button-style"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
