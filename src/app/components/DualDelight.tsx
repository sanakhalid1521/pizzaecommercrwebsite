// components/DualDelight.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import dualdelight from '../../../public/images/dualdelight.jpg';

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

const DualDelight: React.FC = () => {
  return (
    <section id="deals" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Content Section */}
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest">
              Limited Time Offer
            </div>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Delicious <span className="text-orange-500">Dual Deals</span> for the Family
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the juiciest, most flavorful pizzas in town with our exclusive 
              buy-one-get-one deals. Perfectly crafted for your cravings!
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Our Special Deals</h3>
              <div className="space-y-4">
                {deals.map((deal) => (
                  <div key={deal.title} className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">{deal.title}</h4>
                      <p className="text-gray-600">{deal.description}</p>
                    </div>
                    <div className="text-2xl font-black text-orange-600">
                      PKR {deal.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href="#menu"
              className="inline-block bg-orange-500 text-white font-black py-4 px-10 rounded-full hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
              Order Yours Now
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative group">
              <Image
                src={dualdelight}
                alt="Dual Delight Pizza"
                width={800}
                height={600}
                className="rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">50%</div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Discount</p>
                  <p className="text-sm font-black text-gray-900 uppercase">On Second Pizza</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DualDelight;
