// pages/Destinations.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Extract search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const cityQuery = queryParams.get('city') || '';

  useEffect(() => {
    // In a real app, this would fetch from the Amadeus API
    // For now, we'll use mock data
    const mockDestinations = [
      {
        id: 1,
        name: 'Paris',
        country: 'France',
        image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'The City of Light, known for its art, fashion, and culture.'
      },
      {
        id: 2,
        name: 'Tokyo',
        country: 'Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-8a43b3f16d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'A bustling metropolis blending tradition and innovation.'
      },
      {
        id: 3,
        name: 'New York',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'The city that never sleeps, full of energy and opportunities.'
      },
      {
        id: 4,
        name: 'London',
        country: 'UK',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Historic city with modern vibes and royal heritage.'
      },
      {
        id: 5,
        name: 'Sydney',
        country: 'Australia',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'Vibrant harbor city with iconic opera house and beaches.'
      },
      {
        id: 6,
        name: 'Rome',
        country: 'Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        description: 'The Eternal City, home to ancient history and delicious cuisine.'
      }
    ];

    // Filter destinations based on search query
    let filteredDestinations = mockDestinations;
    if (searchQuery) {
      filteredDestinations = mockDestinations.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        dest.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (cityQuery) {
      filteredDestinations = mockDestinations.filter(dest => 
        dest.name.toLowerCase() === cityQuery.toLowerCase()
      );
    }

    setDestinations(filteredDestinations);
    setLoading(false);
  }, [searchQuery, cityQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Destinations</h1>
      
      <div className="mb-8">
        <SearchBar />
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : destinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-4">No destinations found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or browse all destinations.</p>
        </div>
      )}
    </div>
  );
};

export default Destinations;