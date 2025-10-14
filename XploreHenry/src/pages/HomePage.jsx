import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <Destinations />
      </main>
    </div>
  );
};

export default HomePage;