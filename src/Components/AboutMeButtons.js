import React from 'react'

export default function AboutMeButtons() {

  const handleGetInTouch = () => {
    // Replace the email address with your own email address
    window.location.href = 'mailto:charlestaylorhall05@gmail.com';
  };

  const handleViewProjects = () => {
    // Replace 'projects' with the ID or class of your projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='aboutspecs-buttons'>
      <button  onClick={handleGetInTouch} className='buttonStyle'>Get In Touch</button>
      <button  onClick={handleViewProjects} className='buttonStyle'>View Projects</button>
    </div>
  )
}
