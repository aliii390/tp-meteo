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
      <WeatherChart ville={villeSelectionnee} />
      <Temperature ville={villeSelectionnee} />
    </div>
  );
}

export default MeteoCard;