import React from 'react';

export default function Flavorful() {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>
        
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-1 bg-cyan-200 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-slate-600'></div>
          </div>
          <div className='mt-2 mx-4'>
            <h6 className='text-base font-bold text-gray-700'>Step 1: Start Your Flavor Journey</h6>
            <p className='text-xs text-white'>Dive into a world of mouth-watering choices and discover the perfect pizza for you.</p>
          </div>
        </div>

      
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-1 bg-cyan-200 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-slate-600'></div>
          </div>
          <div className='mt-2 mx-4'>
            <h6 className='text-base font-bold text-gray-700'>Step 2: Customize Your Toppings</h6>
            <p className='text-xs text-white'>Add your favorite toppings to create a pizza that’s uniquely yours.</p>
          </div>
        </div>

        
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-1 bg-cyan-200 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-slate-600'></div>
          </div>
          <div className='mt-2 mx-4'>
            <h6 className='text-base font-bold text-gray-700'>Step 3: Place Your Order</h6>
            <p className='text-xs text-white'>Finalize your pizza and get ready for fast, hot delivery right to your door.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
