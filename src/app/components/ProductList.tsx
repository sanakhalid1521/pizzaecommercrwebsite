'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ALL_PRODUCTS } from '@/data/products';

const ProductList: React.FC = () => {
  const { addToCart, searchTerm } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Specialty', 'Classic', 'Vegetarian', 'Tropical'];

  // Filter products based on search term AND category
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="menu" className='bg-orange-600 py-20'>
      <div className='container mx-auto px-4'>
        <div className="text-center mb-12 space-y-4">
          <h2 className='text-5xl font-black text-white uppercase tracking-tighter'>Our <span className="text-orange-400">Pizzas</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">Explore our wide range of handcrafted pizzas made with premium ingredients.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all ${
                selectedCategory === category
                  ? 'bg-white text-orange-600 shadow-xl scale-105'
                  : 'bg-orange-700/50 text-white hover:bg-orange-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-black/10 rounded-3xl">
            <p className="text-white text-2xl font-bold">No pizzas found matching your criteria</p>
            <button 
              onClick={() => {setSelectedCategory('All'); }} 
              className="mt-4 text-orange-400 hover:underline"
            >
              Show all pizzas
            </button>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group relative rounded-[2.5rem] shadow-2xl overflow-hidden w-full max-w-sm transition-all duration-500 hover:-translate-y-2 ${product.bgColor}`}>
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl">
                  <span className="font-black text-gray-900">PKR {product.price}</span>
                </div>

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className='p-8'>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className='text-3xl font-black text-white leading-tight'>{product.title}</h3>
                      <p className='text-white/70 text-sm font-bold uppercase tracking-widest mt-1'>{product.category}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className='w-full py-4 bg-white text-orange-600 font-black rounded-2xl hover:bg-orange-50 transition-all shadow-lg active:scale-95 uppercase tracking-widest'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
