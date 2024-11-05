// components/DualDeal.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import dualdelight from '../public/images/dualdelight.jpg';

interface Deal {
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
  bgColor: string;
}

const deals: Deal[] = [
  {
    title: 'Margherita Madness',
    description: 'Buy one Margherita, get the second one 50% off!',
    price: 1200,
    image: dualdelight,
    bgColor: 'bg-red-500',
  },
];

const DualDeal: React.FC = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-10 mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizza</h2>
        <p className="text-white mb-4">Experience the juiciest pizzas in town!</p>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-cyan-400">Order Now</button>
        
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">
          Our Special Deals
        </h3>

        <ul className="text-white">
          {deals.map((deal) => (
            <li key={deal.title}>
              <strong>{deal.title}:</strong> {deal.description} - <span>${deal.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src={dualdelight}
          alt="Dual Delight Pizza"
          width={600}
          height={500}
          className="w-full h-full rounded-lg shadow-lg transition transform duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default DualDeal;
