import React, { useState } from 'react';
import Temperature from '../Temperature/Temperature';
import BarRecherche from '../BarRecherche/BarRecherche';

function MeteoCard() {
  const [villeSelectionnee, setVilleSelectionnee] = useState('Saint Etienne');

  const handleSearch = (nouvelleVille) => {
    setVilleSelectionnee(nouvelleVille);
  };

  return (
    <div className="meteo-card">
      <BarRecherche onSearch={handleSearch} />
      <Temperature ville={villeSelectionnee} />
    </div>
  );
}

export default MeteoCard;