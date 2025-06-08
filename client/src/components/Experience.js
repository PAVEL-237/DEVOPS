import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Stage en Architecture Système",
      company: "Nom de l'entreprise",
      period: "Juillet 2023 - Août 2023",
      description: [
        "Participation à la conception d'une architecture microservices",
        "Développement d'APIs RESTful",
        "Optimisation des performances système",
        "Mise en place de solutions de monitoring"
      ]
    },
    {
      id: 2,
      title: "Projet Académique",
      company: "Université",
      period: "Janvier 2023 - Juin 2023",
      description: [
        "Conception et implémentation d'un système distribué",
        "Gestion de la scalabilité et de la haute disponibilité",
        "Documentation technique et présentation des résultats"
      ]
    },
    {
      id: 3,
      title: "Stage en Développement Logiciel",
      company: "Nom de l'entreprise",
      period: "Juillet 2022 - Août 2022",
      description: [
        "Développement d'applications web",
        "Intégration de bases de données",
        "Tests et déploiement continu"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Expérience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul className="description-list">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 