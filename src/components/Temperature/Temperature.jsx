import React, { useState, useEffect } from "react";
import sun from "../../assets/sun.svg";
import "./Temperature.css";

// const url =

function Temperature() {
  const [temperature, setTemperature] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(
      "NAIM_API"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur sa marche pas ");
        }
        return response.json();
      })
      .then((data) => {
        setTemperature(data);
        console.log(data);
        
        setChargement(false);
      })
      .catch((erreur) => {
        setErreur(erreur.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <div>sa charge patiente mec</div>;
  if (erreur) return <div>Erreur: {erreur}</div>;
  return (
    <>
      <div className="card-content white-text">
        <span className="card-title">{temperature.location.name}</span>
        <span>{temperature.location.region}</span>
        <p>
          <img src={temperature.current.condition.icon} alt={temperature.current.condition.text} />
        </p>
        <span className="temperature">{temperature.current.temp_c}°</span>
        <div className="wind">Vent 1km/h (360°)</div>
      </div>
    </>
  );
}

export default Temperature;
