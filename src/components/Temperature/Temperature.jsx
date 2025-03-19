import React, { useState, useEffect } from "react";
import "./Temperature.css";
import Date from "../Date/Date";

function Temperature() {
  const [temperature, setTemperature] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

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
        console.log(data);
        setChargement(false);
      })
      .catch((erreur) => {
        setErreur(erreur.message);
        setChargement(false);
      });
  }, []);

  const handleDateSelect = (day) => {
    setSelectedDay(day);
  };

  if (chargement) return <div>sa charge patiente mec</div>;
  if (erreur) return <div>Erreur: {erreur}</div>;
  if (!temperature) return null;

  const selectedForecast = temperature.forecast.forecastday[selectedDay];

  return (
    <>
 
      <div className="card-content white-text">
        <span className="card-title">{temperature.location.name}</span>
        <span>{temperature.location.region}</span>
        <p>
          <img 
            src={selectedForecast.day.condition.icon} 
            alt={selectedForecast.day.condition.text} 
          />
        </p>
        <span className="temperature">{selectedForecast.day.avgtemp_c}°</span>
        <div className="wind">
          Vent {selectedForecast.day.maxwind_kph} km/h
        </div>
      </div>

      <div className="card-action">
      <Date onDateSelect={handleDateSelect} />

  </div>
    </>
  );
}

export default Temperature;