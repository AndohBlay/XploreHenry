import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Import your hero images
import heroImg1 from '../assets/hero-1.jpg';
import heroImg2 from '../assets/hero-2.jpg';

const Hero = () => {
  return (
    <section className="bg-blue-700 text-white rounded-3xl p-8 md:p-12 my-8 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            PLAN <br /> YOUR <br /> ADVENTURE
          </h1>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex items-center justify-center gap-4">
            <img src={heroImg2} alt="Crowded street" className="w-1/3 h-48 object-cover rounded-2xl shadow-lg" />
            <img src={heroImg1} alt="Couple on a scooter" className="w-2/3 h-64 object-cover rounded-2xl shadow-lg" />
        </div>
      </div>
      
      {/* Bottom text and WhatsApp icon */}
      <div className="mt-8 flex justify-between items-center">
        <p className="font-medium text-lg">Your Journey, Perfectly Planned</p>
        <div className="bg-green-500 rounded-full p-3 cursor-pointer hover:scale-110 transition-transform">
          <FaWhatsapp size={30} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;