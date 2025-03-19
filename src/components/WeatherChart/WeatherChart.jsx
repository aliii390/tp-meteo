import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './WeatherChart.css'; // Importer le fichier CSS

const WeatherChart = ({ ville }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_METEO_API}&q=${ville}&days=5&aqi=yes&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        const chartData = data.forecast.forecastday.map(day => ({
          date: day.date,
          temperature: day.day.avgtemp_c,
          humidity: day.day.avghumidity
        }));
        setData(chartData);
      });
  }, [ville]);

  return (
    <ResponsiveContainer width="100%" height={400} className="weather-chart">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
