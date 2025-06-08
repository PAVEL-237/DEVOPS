import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Système de Gestion de Contenu",
      description: "Développement d'un CMS moderne avec architecture microservices",
      technologies: ["Node.js", "React", "MongoDB", "Docker"],
      image: "project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Application de Monitoring",
      description: "Système de monitoring en temps réel pour applications distribuées",
      technologies: ["Python", "Grafana", "Prometheus", "Kubernetes"],
      image: "project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Plateforme d'Apprentissage",
      description: "Système d'apprentissage en ligne avec recommandations personnalisées",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
      image: "project3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projets</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 