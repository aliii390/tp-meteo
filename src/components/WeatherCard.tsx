import '../styles/WeatherCard.css';

interface WeatherCardProps {
  city: string;
}

const WeatherCard = ({ city }: WeatherCardProps) => {
  // Ici vous devrez implémenter la logique pour récupérer les données météo
  return (
    <>
    <div className="weather-card">
      <h2>{city || 'Sélectionnez une ville'}</h2>
      <div className="weather-info">
        <div className="temperature">
          <span className="value">22°C</span>
          <span className="description">Ensoleillé</span>
        </div>
        <div className="details">
          <div className="detail-item">
            <span>Humidité</span>
            <span>65%</span>
          </div>
          <div className="detail-item">
            <span>Vent</span>
            <span>12 km/h</span>
          </div>
          <div className="detail-item">
            <span>Pression</span>
            <span>1013 hPa</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
   
    
};

export default WeatherCard;
