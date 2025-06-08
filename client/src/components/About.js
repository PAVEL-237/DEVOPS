import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Je suis un étudiant en 3ème année d'ingénierie en architecture système,
              passionné par les technologies et l'innovation. Mon parcours académique
              m'a permis d'acquérir des compétences solides en développement logiciel,
              architecture des systèmes et gestion de projet.
            </p>
            <p>
              Mon approche du développement est centrée sur la qualité du code,
              l'optimisation des performances et la scalabilité des solutions.
              Je m'intéresse particulièrement aux architectures distribuées et aux
              systèmes cloud-native.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Formation</h3>
                <p>École d'ingénieur en Architecture Système</p>
              </div>
              <div className="detail-item">
                <h3>Spécialisation</h3>
                <p>Architecture des systèmes distribués</p>
              </div>
              <div className="detail-item">
                <h3>Objectif</h3>
                <p>Devenir architecte système senior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 