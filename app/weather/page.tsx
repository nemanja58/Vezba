'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';


const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>(''); // State for city input
  const [state, setState] = useState<string>(''); // State for state input
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [unit, setUnit] = useState<'F' | 'C'>('F'); // Temperature unit state (Fahrenheit or Celsius)

  const fetchWeather = async (city: string, state: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%20${state}?unitGroup=us&key=MFG6UR7SGP5KHRTP9H3QHM4VU&contentType=json`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data.');
      setWeatherData(null);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city && state) {
      fetchWeather(city, state); // Fetch weather based on user input
    } else {
      setError('Please enter both city and state.');
    }
  };

  // Toggle unit between 'F' and 'C'
  const toggleUnit = () => {
    setUnit(unit === 'F' ? 'C' : 'F');
  };

  useEffect(() => {
    // Default weather when the page loads (optional)
    fetchWeather('Niš', 'Serbia');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-300 to-pink-300 flex justify-center items-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Weather Search</h1>
        
        {/* Weather Form Component */}
        <WeatherForm
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          handleSubmit={handleSubmit}
        />

        {/* Unit Toggle Slider */}
        <div className="slider-container">
  <div className="slider-wrapper">
    <label className="relative inline-block">
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={unit === 'C'}
        onChange={toggleUnit}
      />
      <span className="slider">
        <span className="label label-f">°F</span>
        <span className="label label-c">°C</span>
      </span>
    </label>
  </div>
</div>

        {/* Weather Data Component */}
        <WeatherCard weatherData={weatherData} loading={loading} error={error} unit={unit} />
      </div>
    </div>
  );
};

export default WeatherPage;
