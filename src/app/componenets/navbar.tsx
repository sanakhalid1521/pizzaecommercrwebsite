import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import profilepic from "../public/images/profilepic.jpg"; // Make sure this path is correct

export default function Navbar() {
  return (
    <div className="w-full bg-red-900">
      <div className='flex justify-between items-center p-5'>
        
        {/* Left Section (Logo and Search) */}
        <div className='flex items-center gap-4'>
          
          
          <FaPizzaSlice className='w-6 h-6 text-red-300 hover:text-orange-500' />
          
          
          <div className='relative'>
            <input
              className='rounded py-2 px-4 outline-none text-sm w-[300px] pr-10 hidden lg:block md:block'
              placeholder="Search for pizza from menu"
            />
            <IoSearch className='w-5 h-5 text-yellow-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' />
          </div>
        </div>

        
        <div className='flex items-center gap-4'>
          <FaBolt className='w-5 h-5 text-amber-500 hidden lg:block md:block' />
          
          <p className='text-sm text-white hidden lg:block md:block'>
            Order now and get within
            <span className='text-orange-300'> 30 minutes</span>
          </p>

          <FaShoppingCart className='w-8 h-8 rounded-full ring-2 relative text-orange-300 hover:text-amber-100' />

          {/* Profile Picture using Next.js Image */}
          <Image
            src={profilepic}
            alt="Profile Picture"
            className="w-8 h-8 rounded-full ring-2 ring-orange-300"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
