'use client';

import React, { useState } from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import profilepic from "../../../public/images/profilepic.jpg";
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartCount, searchTerm, setSearchTerm } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-red-900 sticky top-0 z-50 shadow-2xl">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            
            {/* Left Section (Logo and Navigation) */}
            <div className='flex items-center gap-8'>
              <Link href="/" className="flex items-center gap-2 group">
                <FaPizzaSlice className='w-8 h-8 text-orange-400 group-hover:rotate-12 transition-transform duration-300' />
                <span className="text-white text-xl font-black uppercase tracking-tighter">Pizza<span className="text-orange-400">Flow</span></span>
              </Link>
              
              <div className="hidden lg:flex items-center gap-6">
                <Link href="#menu" className="text-white/80 hover:text-white font-medium transition-colors">Menu</Link>
                <Link href="#deals" className="text-white/80 hover:text-white font-medium transition-colors">Deals</Link>
                <Link href="#reservation" className="text-white/80 hover:text-white font-medium transition-colors">Reservation</Link>
              </div>
            </div>

            {/* Center Section (Search) - Hidden on mobile */}
            <div className='hidden md:block flex-1 max-w-md mx-8'>
              <div className='relative'>
                <input
                  className='w-full bg-red-800/50 border border-red-700 rounded-full py-2 px-6 outline-none text-white text-sm placeholder-red-300 focus:bg-red-800 transition-all'
                  placeholder="Search for your favorite pizza..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoSearch className='w-5 h-5 text-orange-400 absolute right-4 top-1/2 transform -translate-y-1/2' />
              </div>
            </div>

            {/* Right Section (Icons and Profile) */}
            <div className='flex items-center gap-4 sm:gap-6'>
              <div className='hidden lg:flex flex-col items-end'>
                <div className="flex items-center gap-2">
                  <FaBolt className='w-4 h-4 text-orange-400' />
                  <span className="text-xs text-orange-400 font-bold uppercase">Fast Delivery</span>
                </div>
                <p className='text-sm text-white font-medium'>30 Mins or <span className="text-orange-400 italic">Free</span></p>
              </div>

              <div 
                className="relative cursor-pointer group"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingCart className='w-7 h-7 text-white group-hover:text-orange-400 transition-colors' />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-red-900 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>

              <Image
                src={profilepic}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-orange-400 p-0.5 cursor-pointer hover:scale-110 transition-transform"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
