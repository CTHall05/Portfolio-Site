import React from 'react';
import Devault from '../Images/devault-image.png';
import Employee from '../Images/employeetracker.png';
import Yoga from '../Images/izzyhallyoga.png';

export default function MyProjects() {
  const projects = [
    {
      title: 'Devault',
      description: 'The final project of my coding bootcamp, where for 1 month we were put into teams and had to create something from scratch, combining everything that we had learnt. Devault is an application where you can completely manage your developer job search through interview prep, job tracking and tech quizes!',
      image: Devault,
      repoLink: 'https://github.com/SchoolOfCode/bc13_final-project_front-end-cyber-insecure',
      deployedLink: 'https://dev-vault.netlify.app/',
    },
    {
      title: 'Employee Tracker',
      description: 'A simple employee tracker CRUD application where a user can create a employee, update an employee and delete an employee. I made this project as I wanted to get used to creating HTTP request to a server through a frontend application.',
      image: Employee,
      repoLink: 'https://github.com/CTHall05/Employee-Tracker-Crud',
    },
    {
      title: 'Izzy Hall Yoga',
      description: `A functional booking form created for my sister's Yoga business. Where students can book onto her yoga classes and she get's updated on how many people are turning up for each class.`,
      image: Yoga,
      repoLink: 'https://github.com/CTHall05/Izzy-Hall-Yoga',
      deployedLink: 'https://izzy-hall-yoga-jrju-cthall05.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <div className="project-buttons">
                {project.repoLink && (
                  <a href={project.repoLink} className="project-button-style" target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                )}
                {project.deployedLink && (
                  <a href={project.deployedLink} className="project-button-style" target="_blank" rel="noopener noreferrer">
                    Deployed Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
       
      </div>
    </section>
  );
}
