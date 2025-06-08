import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Développement Backend",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Spring Boot", level: 85 }
      ]
    },
    {
      category: "Développement Frontend",
      items: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: "Architecture & DevOps",
      items: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 }
      ]
    },
    {
      category: "Bases de données",
      items: [
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "PostgreSQL", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Compétences</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-items">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 