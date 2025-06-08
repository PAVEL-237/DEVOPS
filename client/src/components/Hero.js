import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Bonjour, je suis <span className="highlight">Rollin Pavel Djetchouang</span></h1>
          <h2>Étudiant en Architecture Système</h2>
          <p className="hero-description">
            Passionné par l'architecture des systèmes et le DévOps.
            Je mets mes compétences au service de projets innovants et ambitieux.
          </p>
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              Voir mes projets
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn">
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 