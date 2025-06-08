import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourrez ajouter la logique d'authentification plus tard
    // Pour l'instant, nous redirigeons simplement vers la page d'administration
    window.location.href = '/admin';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginForm; 