// components/PizzaCarousel.tsx
import React from 'react';
import Image from 'next/image';
import crunchypizza from '../public/images/crunchypizza.png';
import arabian from '../public/images/arabian.png';
import fajita from '../public/images/fajita.webp';
import italian from '../public/images/italian.jpg';
import delicious from '../public/images/delicious.jpg';

export default function PizzaCarousel() {
  return (
    <div>
      <section className='bg-gradient-to-r from-red-800 to-orange-500'>
        <div className='py-2 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>

            {/* Column 1: Crunchy Pizza */}
            <div className='flex flex-col'>
              <a
                href='#'
                className='group flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-orange-500'>
                <Image
                  src={crunchypizza}
                  alt='Crunchy Pizza'
                  width={200}
                  height={150}
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                <h3 className='text-lg font-medium text-white text-center mt-2'>
                  Crunchy Pizza
                </h3>
              </a>
            </div>

            {/* Column 2: Arabian and Fajita Pizzas */}
            <div className='flex flex-col'>
              <div className='flex gap-2 mb-2'>

                {/* Chicken Arabian Pizza */}
                <a
                  href='#'
                  className='group flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-orange-500 w-1/2'>
                  <Image
                    src={arabian}
                    alt='Chicken Arabian Pizza'
                    width={100}
                    height={100}
                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                  />
                  <h3 className='text-lg font-medium text-white text-center mt-2'>
                    Chicken Arabian
                  </h3>
                </a>

                {/* Chicken Fajita Pizza */}
                <a
                  href='#'
                  className='group flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-orange-500 w-1/2'>
                  <Image
                    src={fajita}
                    alt='Chicken Fajita Pizza'
                    width={100}
                    height={100}
                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                  />
                  <h3 className='text-lg font-medium text-white text-center mt-2'>
                    Chicken Fajita
                  </h3>
                </a>
              </div>

              {/* Italian Pizza Below Arabian & Fajita */}
              <a
                href='#'
                className='group flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-orange-500'>
                <Image
                  src={italian}
                  alt='Italian Pizza'
                  width={200}
                  height={150}
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                <h3 className='text-lg font-medium text-white text-center mt-2'>
                  Italian Pizza
                </h3>
              </a>
            </div>

            {/* Column 3: Delicious Pizza */}
            <div className='flex flex-col'>
              <a
                href='#'
                className='group flex flex-col overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-orange-500'>
                <Image
                  src={delicious}
                  alt='Cheesy Delicious Pizza'
                  width={200}
                  height={150}
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                <h3 className='text-lg font-medium text-white text-center mt-2'>
                  Cheesy Delicious Pizza
                </h3>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
