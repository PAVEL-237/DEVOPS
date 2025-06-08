import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Ingénieur en Architecture Système",
      school: "Nom de l'école",
      period: "2021 - 2024",
      description: "Formation en architecture des systèmes, développement logiciel et gestion de projet",
      achievements: [
        "Spécialisation en systèmes distribués",
        "Projets en architecture cloud-native",
        "Certification AWS Cloud Practitioner"
      ]
    },
    {
      id: 2,
      degree: "DUT Informatique",
      school: "Nom de l'IUT",
      period: "2019 - 2021",
      description: "Formation en développement logiciel et bases de données",
      achievements: [
        "Projets de développement web et mobile",
        "Stage en entreprise",
        "Projet de fin d'études"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Formation</h2>
        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <span className="period">{edu.period}</span>
                <p className="description">{edu.description}</p>
                <ul className="achievements">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
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

export default Education; 