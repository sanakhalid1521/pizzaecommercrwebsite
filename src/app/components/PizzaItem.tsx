'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ALL_PRODUCTS } from '@/data/products';

const PizzaItem: React.FC = () => {
  const { addToCart } = useCart();
  
  // Show items 3 to 6
  const morePizzas = ALL_PRODUCTS.slice(3, 6);

  return (
    <section className='bg-orange-600 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-extrabold text-center text-white mb-10 uppercase tracking-widest'>More Pizza Options</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {morePizzas.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl shadow-xl overflow-hidden w-full max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${product.bgColor}`}>
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>{product.title}</h3>
                <p className='text-white/80 text-sm mb-4 italic'>Category: {product.category}</p>
                <div className="flex justify-between items-center">
                  <span className='text-2xl font-black text-white'>PKR {product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className='px-6 py-2 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-100 transition duration-300 shadow-md active:scale-95'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaItem;
