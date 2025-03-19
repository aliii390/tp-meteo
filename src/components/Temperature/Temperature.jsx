import React, { useState, useEffect } from "react";
import "./Temperature.css";

function Temperature() {
  const [temperature, setTemperature] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_METEO_API}&q=Saint%20Etienne&days=5&aqi=yes&alerts=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur sa marche pas ");
        }
        return response.json();
      })
      .then((data) => {
        setTemperature(data);
        setChargement(false);
      })
      .catch((erreur) => {
        setErreur(erreur.message);
        setChargement(false);
      });
  }, []);

  const handleDateClick = (day) => {
    setActiveDay(day);
  };

  // Fonction pour formater la date en jour de la semaine en français
  const formatDate = (dateString) => {
    const options = { weekday: 'long' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  if (chargement) return <div>sa charge patiente mec</div>;
  if (erreur) return <div>Erreur: {erreur}</div>;
  if (!temperature || !temperature.forecast) return null;

  const selectionJour = temperature.forecast.forecastday[activeDay];

  return (
    <>
      <div className="card-content white-text">
        <span className="card-title">{temperature.location.name}</span>
        <span>{temperature.location.region}</span>
        <p>
          <img 
            src={selectionJour.day.condition.icon} 
            alt={selectionJour.day.condition.text} 
          />
        </p>
        <span className="temperature">{selectionJour.day.avgtemp_c}°</span>
        <div className="wind">
          Vent {selectionJour.day.maxwind_kph} km/h
        </div>
      </div>

      <div className="date-buttons">
        {temperature.forecast.forecastday.map((day, index) => (
          <button
            key={day.date}
            className={`date-button ${activeDay === index ? 'active' : ''}`}
            onClick={() => handleDateClick(index)}
          >
            {index === 0 ? "Aujourd'hui" : formatDate(day.date).charAt(0).toUpperCase() + formatDate(day.date).slice(1)}
          </button>
        ))}
      </div>
    </>
  );
}

export default Temperature;