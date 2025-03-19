import React, { useState } from 'react';
import Temperature from '../Temperature/Temperature';
import BarRecherche from '../BarRecherche/BarRecherche';
import WeatherChart from '../WeatherChart/WeatherChart';
import './MeteoCard.css'; // Importer le fichier CSS

function MeteoCard() {
  const [villeSelectionnee, setVilleSelectionnee] = useState('Saint Etienne');

  const handleSearch = (nouvelleVille) => {
    setVilleSelectionnee(nouvelleVille);
  };

  return (
    <div className="meteo-card">
      <BarRecherche onSearch={handleSearch} />
      <div className="meteo-content">
        <Temperature ville={villeSelectionnee} />
        <WeatherChart ville={villeSelectionnee} />
      </div>
    </div>
  );
}

export default MeteoCard;