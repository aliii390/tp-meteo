import React, { useState } from 'react';
import './Recherche.css';

function BarRecherche({ onSearch }) {
  const [ville, setVille] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ville.trim()) {
      onSearch(ville);
      setVille('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        placeholder="Rechercher une ville..."
      />
      <button type="submit" className="search-button">
        Rechercher
      </button>
    </form>
  );
}

export default BarRecherche;