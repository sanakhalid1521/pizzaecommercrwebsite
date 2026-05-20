import React from 'react';
import Image from 'next/image';
import delicious from '../../../public/images/delicious.jpg';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className='relative h-[600px] flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={delicious}
          alt="Premium Pizza Background"
          className="w-full h-full object-cover"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className='relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center'>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full text-white text-xs font-black uppercase tracking-widest animate-bounce">
            🔥 Hot & Fresh Right Now
          </div>
          
          <h1 className='text-white text-6xl md:text-8xl font-black leading-tight uppercase tracking-tighter'>
            The Ultimate <br />
            <span className="text-orange-500">Pizza</span> Experience
          </h1>
          
          <p className='text-white/80 text-xl max-w-lg leading-relaxed font-medium'>
            Handcrafted with love, topped with the freshest ingredients, and baked to perfection. 
            Discover why we&apos;re the city&apos;s favorite pizza destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#menu"
              className='bg-orange-500 text-white text-lg font-black py-5 px-10 rounded-2xl shadow-2xl hover:bg-orange-600 transition-all hover:-translate-y-1 active:scale-95 text-center uppercase tracking-widest'
            >
              Order Online
            </Link>
            <Link 
              href="#deals"
              className='bg-white/10 backdrop-blur-md text-white border-2 border-white/20 text-lg font-black py-5 px-10 rounded-2xl hover:bg-white/20 transition-all text-center uppercase tracking-widest'
            >
              View Deals
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-4xl font-black text-white italic">30+</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Flavors</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white italic">24/7</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white italic">100k</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
