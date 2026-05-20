import React from 'react';

export default function Flavorful() {
  const steps = [
    {
      number: 1,
      title: "Start Your Flavor Journey",
      description: "Dive into a world of mouth-watering choices and discover the perfect pizza for you.",
      icon: "🍕"
    },
    {
      number: 2,
      title: "Customize Your Toppings",
      description: "Add your favorite toppings to create a pizza that’s uniquely yours.",
      icon: "👩‍🍳"
    },
    {
      number: 3,
      title: "Place Your Order",
      description: "Finalize your pizza and get ready for fast, hot delivery right to your door.",
      icon: "🚀"
    }
  ];

  return (
    <section className='py-20 bg-white/5 backdrop-blur-sm'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl font-black text-white uppercase tracking-tighter'>How It <span className="text-orange-400">Works</span></h2>
          <p className='text-white/60 max-w-2xl mx-auto'>Three simple steps to get the world&apos;s best pizza delivered straight to your doorstep.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {steps.map((step) => (
            <div key={step.number} className='relative group'>
              <div className='flex flex-col items-center text-center space-y-6'>
                {/* Step Number & Icon */}
                <div className='relative w-24 h-24 flex items-center justify-center'>
                  <div className='absolute inset-0 bg-orange-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl shadow-orange-500/20'></div>
                  <div className='absolute inset-0 bg-white rounded-3xl -rotate-6 group-hover:-rotate-3 transition-transform duration-300'></div>
                  <span className='relative text-4xl group-hover:scale-110 transition-transform duration-300'>{step.icon}</span>
                  <div className='absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-black border-2 border-white'>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-white'>{step.title}</h3>
                  <p className='text-white/60 leading-relaxed'>{step.description}</p>
                </div>
              </div>

              {/* Connector Line (Desktop Only) */}
              {step.number < 3 && (
                <div className='hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] border-t-4 border-dashed border-white/10'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
