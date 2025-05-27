// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Configuration globale d'axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('/api/login/', {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });

      if (response.data.status === 'success') {
        // Stocker les informations de l'utilisateur si nécessaire
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/home');
      } else {
        setError(response.data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setError(
        error.response?.data?.message || 
        'Nom d\'utilisateur ou mot de passe incorrect'
      );
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Connexion</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nom d'utilisateur"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
