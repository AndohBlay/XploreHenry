// pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About TravelPlanner</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <p className="text-lg mb-6">
          TravelPlanner is your ultimate companion for planning memorable trips and discovering amazing destinations around the world. 
          Our mission is to make travel planning seamless, enjoyable, and efficient.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Comprehensive destination information with attractions and activities</li>
          <li>Real-time flight and hotel search powered by Amadeus API</li>
          <li>Customizable itinerary planning with date and time management</li>
          <li>Weather information for your chosen destinations</li>
          <li>Responsive design that works on all devices</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">How We Help Travelers</h2>
        <p className="mb-4">
          We understand that planning a trip can be overwhelming. That's why we've created a platform that brings all the essential 
          travel planning tools into one place. From initial destination research to creating a detailed daily itinerary, 
          TravelPlanner has you covered.
        </p>
        
        <p>
          Our integration with the Amadeus API ensures you have access to accurate, up-to-date information on flights and accommodations, 
          making it easier to compare options and make informed decisions for your travels.
        </p>
      </div>
    </div>
  );
};

export default About;