import React from 'react';

import parisImg from '../assets/paris.jpg';
import tokyoImg from '../assets/tokyo.jpg';
import newYorkImg from '../assets/newyork.jpg';
import baliImg from '../assets/bali.jpg';
import romeImg from '../assets/rome.jpg';
import capeTownImg from '../assets/capetown.jpg';

const destinationData = [
  {
    image: parisImg,
    city: 'Paris, France 🇫🇷',
    description: 'Romantic city of lights, famous for art, fashion, and cuisine',
  },
  {
    image: tokyoImg,
    city: 'Tokyo, Japan 🇯🇵',
    description: 'Blend of tradition and technology, vibrant culture and food.',
  },
  {
    image: newYorkImg,
    city: 'New York City 🇺🇸',
    description: 'The city that never sleeps with iconic landmarks and energy',
  },
  {
    image: baliImg,
    city: 'Bali 🇮🇩',
    description: 'Tropical paradise with beautiful beaches',
  },
  {
    image: romeImg,
    city: 'Rome 🇮🇹',
    description: 'Historic landmarks.',
  },
  {
    image: capeTownImg,
    city: 'Cape Town 🇿🇦',
    description: 'Stunning beaches and landscapes',
  },
];

const DestinationCard = ({ image, city, description }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={city} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-800">{city}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);


const Destinations = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800">Explore with Henry</h2>
      <p className="text-center text-gray-600 mt-2 mb-10">Discover some of the most loved travel spots around the world</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationData.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;