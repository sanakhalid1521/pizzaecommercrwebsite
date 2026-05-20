// components/PizzaCarousel.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import crunchypizza from '../../../public/images/crunchypizza.png';
import arabian from '../../../public/images/arabian.png';
import fajita from '../../../public/images/fajita.webp';
import italian from '../../../public/images/italian.jpg';
import delicious from '../../../public/images/delicious.jpg';

export default function PizzaCarousel() {
  return (
    <div>
      <section className='bg-gradient-to-r from-red-800 to-orange-500'>
        <div className='py-6 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            {/* Column 1: Crunchy Pizza */}
            <div className='flex flex-col'>
              <Link
                href='#menu'
                className='group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 shadow-xl transition-all duration-300 hover:shadow-2xl'>
                <Image
                  src={crunchypizza}
                  alt='Crunchy Pizza'
                  width={400}
                  height={300}
                  className='w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className='text-2xl font-bold text-white'>
                    Crunchy Pizza
                  </h3>
                </div>
              </Link>
            </div>

            {/* Column 2: Arabian and Fajita Pizzas */}
            <div className='flex flex-col gap-6'>
              <div className='flex gap-6 flex-1'>

                {/* Chicken Arabian Pizza */}
                <Link
                  href='#menu'
                  className='group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 w-1/2 shadow-xl transition-all duration-300 hover:shadow-2xl'>
                  <Image
                    src={arabian}
                    alt='Chicken Arabian Pizza'
                    width={200}
                    height={200}
                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className='text-lg font-bold text-white'>
                      Chicken Arabian
                    </h3>
                  </div>
                </Link>

                {/* Chicken Fajita Pizza */}
                <Link
                  href='#menu'
                  className='group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 w-1/2 shadow-xl transition-all duration-300 hover:shadow-2xl'>
                  <Image
                    src={fajita}
                    alt='Chicken Fajita Pizza'
                    width={200}
                    height={200}
                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className='text-lg font-bold text-white'>
                      Chicken Fajita
                    </h3>
                  </div>
                </Link>
              </div>

              {/* Italian Pizza Below Arabian & Fajita */}
              <Link
                href='#menu'
                className='group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 shadow-xl transition-all duration-300 hover:shadow-2xl'>
                <Image
                  src={italian}
                  alt='Italian Pizza'
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className='text-2xl font-bold text-white'>
                    Italian Pizza
                  </h3>
                </div>
              </Link>
            </div>

            {/* Column 3: Delicious Pizza */}
            <div className='flex flex-col'>
              <Link
                href='#menu'
                className='group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 shadow-xl transition-all duration-300 hover:shadow-2xl h-full'>
                <Image
                  src={delicious}
                  alt='Cheesy Delicious Pizza'
                  width={400}
                  height={600}
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className='text-2xl font-bold text-white'>
                    Cheesy Delicious
                  </h3>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
