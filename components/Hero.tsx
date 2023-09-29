// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-halloween-bg bg-cover bg-center text-white">
      <h1 className="text-5xl font-bold text-shadow-lg">Come and join the party</h1>
      <p className="text-lg mt-4 text-shadow-lg">
        Collect cards and redeem your new Halloween toy today
      </p>
      <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        Join Now
      </button>
    </section>
  );
};

export default Hero;
