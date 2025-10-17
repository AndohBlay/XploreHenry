import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import About  from './About';
const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <Destinations />
      </main>
        <About />
    </div>
  );
};

export default HomePage;