'use client'

import React from 'react';

interface WeatherFormProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ city, setCity, state, setState, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="p-3 border border-gray-300 rounded-lg w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 !text-black"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter State"
          className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 !text-black"
        />
        <button
          type="submit"
          className="p-3 bg-indigo-600 text-white rounded-lg w-full sm:w-auto hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;