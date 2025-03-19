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
    <div className="weather-chart-container">
      <h5 className="chart-title">Tendances météorologiques</h5>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="date" 
            stroke="#B0BEC5"
            tick={{ fill: '#B0BEC5' }}
            tickLine={{ stroke: '#B0BEC5' }}
          />
          <YAxis 
            stroke="#B0BEC5"
            tick={{ fill: '#B0BEC5' }}
            tickLine={{ stroke: '#B0BEC5' }}
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(26, 26, 46, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Legend 
            wrapperStyle={{
              color: '#B0BEC5'
            }}
          />
          <Line 
            type="monotone"
            dataKey="temperature"
            stroke="#64B5F6"
            strokeWidth={3}
            dot={{ r: 6, fill: '#64B5F6', strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />
          <Line 
            type="monotone"
            dataKey="humidity"
            stroke="#81D4FA"
            strokeWidth={3}
            dot={{ r: 6, fill: '#81D4FA', strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
