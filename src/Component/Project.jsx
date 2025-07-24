import React from 'react'
import files from './Files'

function Project() {
  return (
     <section className="project-section">
      <h2 className="project-heading">Projects</h2>
    <p className='project-p'>A section of my recent work,showcasing my skills and experience in full-stack development.</p>
    <div className="project-grid">
        {files.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project