import axios from 'axios';
import React, { useEffect, useState } from 'react';

const statusColors = {
  'On Time': 'bg-green-100 text-green-800',
  'Delayed': 'bg-yellow-100 text-yellow-800',
  'Cancelled': 'bg-red-100 text-red-800',
};

const AllFlights = () => {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/flights/`)
      .then(response => {
        setFlightData(response.data);
        console.log('Flight data fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Flight Status Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flightData.map(flight => (
          <div key={flight._id} className={`p-4 rounded-lg shadow-lg ${statusColors[flight.status]}`}>
            <h2 className="text-xl font-semibold mb-2">{flight.flight_id} - {flight.airline}</h2>
            <p className="mb-1"><strong>Status:</strong> {flight.status}</p>
            <p className="mb-1"><strong>Departure Gate:</strong> {flight.departure_gate}</p>
            <p className="mb-1"><strong>Arrival Gate:</strong> {flight.arrival_gate}</p>
            <p className="mb-1"><strong>Scheduled Departure:</strong> {new Date(flight.scheduled_departure).toLocaleString()}</p>
            <p className="mb-1"><strong>Scheduled Arrival:</strong> {new Date(flight.scheduled_arrival).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFlights;
