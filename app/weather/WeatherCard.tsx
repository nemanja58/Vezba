'use client'

interface WeatherCardProps {
  weatherData: any;
  loading: boolean;
  error: string | null;
  unit: 'F' | 'C';
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, loading, error, unit }) => {
  const convertTemperature = (tempF: number): number => {
    return unit === 'C' ? ((tempF - 32) * 5) / 9 : tempF; // Convert F to C if needed
  };

  return (
    <div className="mt-6 text-center">
      {error && <div className="text-red-500 text-center">{error}</div>}
      {loading && <div className="text-center text-gray-600">Loading...</div>}
      {weatherData && !loading && (
        <>
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Weather in {weatherData.resolvedAddress}
          </h2>
          <p className="text-3xl font-semibold text-gray-800">
            {Math.round(convertTemperature(weatherData.currentConditions.temp))}°{unit}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong>Condition:</strong> {weatherData.currentConditions.conditions}
          </p>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
