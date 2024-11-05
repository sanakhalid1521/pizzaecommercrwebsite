import React from 'react';

// Import images directly
import Image, { StaticImageData } from 'next/image';
import margherita from '../public/product/margherita.webp';
import pepperoni from '../public/product/Pepperoni.jpg';
import italian from '../public/product/italian.jpg';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  bgColor: string;
  image: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Margherita',
    category: 'Specialty',
    price: 799,
    bgColor: 'bg-red-500',
    image: margherita, 
  },
  {
    id: 2,
    title: 'Pepperoni',
    category: 'Specialty',
    price: 899,
    bgColor: 'bg-orange-500',
    image: pepperoni,
  },
  {
    id: 3,
    title: 'Italian Pizza',
    category: 'Classic',
    price: 999,
    bgColor: 'bg-green-500',
    image: italian,
  },
];

const ProductList: React.FC = () => {
  return (
    <section className='bg-orange-600 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Our Pizzas</h2>
        <div className='flex justify-center space-x-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg shadow-md overflow-hidden w-64 transition-transform duration-300 hover:scale-105 ${product.bgColor}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={256}
                height={144}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-white'>{product.title}</h3>
                <p className='text-white text-sm mb-1'>Category: {product.category}</p>
                <span className='text-lg font-bold text-white'>PKR {product.price}</span>
                <div className='mt-2'>
                  <button className='px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300'>
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

export default ProductList;
