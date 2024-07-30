import React, { useState } from 'react';
import axios from 'axios';

const SearchFlight = () => {
  const [flightId, setFlightId] = useState('');
  const [flight, setFlight] = useState(null);

  const handleSearch = () => {
    axios.get(`http://air-aware-r48m82gnl-thealokkushwahas-projects.vercel.app/api/flights/${flightId}`)
      .then(response => setFlight(response.data))
      .catch(error => console.error('Error fetching flight:', error));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Search Flight</h1>
        <div className="mb-4">
          <input
            type="text"
            value={flightId}
            onChange={(e) => setFlightId(e.target.value)}
            placeholder="Enter flight ID"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
        {flight && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Flight Details</h2>
            <p className="text-gray-700">
              {flight.airline} {flight.flight_id}: {flight.status} From Gate {flight.departure_gate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFlight;
