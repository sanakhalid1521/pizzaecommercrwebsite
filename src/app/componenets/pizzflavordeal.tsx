// components/FlavorDeal.tsx
import React from 'react';

type Deal = {
  title: string;
  description: string;
};

const FlavorDeal: React.FC = () => {
  const offers: Deal[] = [
    {
      title: 'Happy Hour',
      description: 'Enjoy 50% off from 5PM to 7PM!',
    },
    {
      title: 'Weekend Special',
      description: 'Get a free drink with any large pizza order this weekend!',
    },
    {
      title: 'Family Feast',
      description: 'Buy 2 pizzas and get a third one free, all day!',
    },
  ];

  return (
    <div className="p-6 bg-gray-600 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-white">Special Pizza Deals!</h2>
      <div className="mt-4 space-y-4">
        {offers.map((offer, index) => (
          <div key={index} className="p-4 bg-orange-500 rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
            <p className="mt-1 text-gray-700">{offer.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded">
        Order Now
      </button>
    </div>
  );
};

export default FlavorDeal;
