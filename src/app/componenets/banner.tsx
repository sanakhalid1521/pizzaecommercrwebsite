import React from 'react';
import Image from 'next/image';
import delicious from '../public/images/delicious.jpg';

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-red-800 to-orange-600 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <Image
          src={delicious}
          alt="banner pic"
          className="w-full h-full object-cover"
          layout="fill" 
        />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold'>
          Discover our menu
        </h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>
          Shop now for exclusive pizza discounts
        </p>
        <button
          type='button'
          className='bg-gray-700 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-400'
        >
          Exciting deal launch at 12pm
        </button>
      </div>
    </div>
  );
}
