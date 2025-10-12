// pages/Itinerary.jsx
import React, { useState } from 'react';

const Itinerary = () => {
  const [itineraryItems, setItineraryItems] = useState([]);
  const [newItem, setNewItem] = useState({
    type: 'activity',
    name: '',
    date: '',
    time: '',
    location: '',
    notes: ''
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.date) {
      setItineraryItems([...itineraryItems, { ...newItem, id: Date.now() }]);
      setNewItem({
        type: 'activity',
        name: '',
        date: '',
        time: '',
        location: '',
        notes: ''
      });
    }
  };

  const handleRemoveItem = (id) => {
    setItineraryItems(itineraryItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Travel Itinerary</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Item Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <form onSubmit={handleAddItem}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Type</label>
                <select 
                  value={newItem.type}
                  onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="activity">Activity</option>
                  <option value="flight">Flight</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="meal">Meal</option>
                  <option value="transport">Transport</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E.g., Visit Eiffel Tower"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Date</label>
                <input 
                  type="date"
                  value={newItem.date}
                  onChange={(e) => setNewItem({...newItem, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Time</label>
                <input 
                  type="time"
                  value={newItem.time}
                  onChange={(e) => setNewItem({...newItem, time: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Location</label>
                <input 
                  type="text"
                  value={newItem.location}
                  onChange={(e) => setNewItem({...newItem, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E.g., Paris, France"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Notes</label>
                <textarea 
                  value={newItem.notes}
                  onChange={(e) => setNewItem({...newItem, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add to Itinerary
              </button>
            </form>
          </div>
        </div>
        
        {/* Itinerary List */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">My Itinerary</h2>
            
            {itineraryItems.length > 0 ? (
              <div className="space-y-4">
                {itineraryItems.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            item.type === 'activity' ? 'bg-green-500' :
                            item.type === 'flight' ? 'bg-blue-500' :
                            item.type === 'accommodation' ? 'bg-purple-500' :
                            item.type === 'meal' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></span>
                          <h3 className="font-semibold">{item.name}</h3>
                        </div>
                        <div className="text-sm text-gray-600 ml-5">
                          {item.date} {item.time && `at ${item.time}`}
                          {item.location && ` • ${item.location}`}
                        </div>
                        {item.notes && (
                          <p className="text-gray-700 mt-2 ml-5">{item.notes}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Your itinerary is empty. Add some items to get started!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;