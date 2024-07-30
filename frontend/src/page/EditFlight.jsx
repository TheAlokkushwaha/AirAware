import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditFlight = () => {
  const [flightId, setFlightId] = useState('');
  const [flight, setFlight] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (flightId) {
      axios.get(`http://air-aware-r48m82gnl-thealokkushwahas-projects.vercel.app/api/flights/${flightId}`)
        .then(response => {
          setFlight(response.data);
          setIsEditing(true);
        })
        .catch(error => {
          console.error('Error fetching flight data:', error);
        });
    }
  }

  const handleFlightIdChange = (e) => {
    setFlightId(e.target.value);
  };

  const handleSubmitFlightId = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight(prevFlight => ({
      ...prevFlight,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://air-aware-r48m82gnl-thealokkushwahas-projects.vercel.app/api/flights/${flightId}`, flight)
      .then(response => {
        console.log('Flight data updated successfully:', response.data);
        handleCancel();
      })
      .catch(error => {
        console.error('Error updating flight data:', error);
      });
      navigate('/update');
  };

  const handleCancel = () => {
    setFlightId('');
    setFlight(null);
    setIsEditing(false);
    navigate('/update');
  };

  return (
    <div className="container mx-auto p-6">
      {!isEditing ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter Flight ID</h2>
          <form onSubmit={handleSubmitFlightId}>
            <div className="mb-4">
              <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
                Flight ID
              </label>
              <input
                type="text"
                id="flightId"
                name="flightId"
                value={flightId}
                onChange={handleFlightIdChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Flight</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(flight).map(key => (
              <div key={key} className="mb-4">
                {key === 'status' ? (
                  <>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      id={key}
                      name={key}
                      value={flight[key]}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="On Time">On Time</option>
                      <option value="Delayed">Delayed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </>
                ) : (
                  <>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                      {key.replace('_', ' ')}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={flight[key]}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </>
                )}
              </div>
            ))}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditFlight;
