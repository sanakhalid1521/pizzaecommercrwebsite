import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Pizza Lover",
      content: "The best pizza I've ever had in this city! The crust is perfectly crunchy and the toppings are so fresh. Highly recommended!",
      rating: 5,
      avatar: "👨"
    },
    {
      id: 2,
      name: "Sara Smith",
      role: "Food Vlogger",
      content: "Amazing experience! The Chicken Fajita is to die for. The delivery was super fast, reached me in less than 25 minutes.",
      rating: 5,
      avatar: "👩"
    },
    {
      id: 3,
      name: "Zainab Ali",
      role: "Regular Customer",
      content: "Love the new website! It's so easy to order now. The receipt feature is great for tracking my orders.",
      rating: 4,
      avatar: "👧"
    }
  ];

  return (
    <section className="py-24 bg-red-950 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">What Our <span className="text-orange-400">Fans</span> Say</h2>
          <p className="text-red-200/60 max-w-xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what our community of pizza lovers has to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-red-900/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 hover:border-orange-500/30 transition-all duration-500 group">
              <div className="flex flex-col h-full space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">★</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-red-100 text-lg leading-relaxed italic flex-1">
                  &quot;{review.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight">{review.name}</h4>
                    <p className="text-orange-400/60 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
           <span className="text-2xl font-black text-white uppercase tracking-tighter italic">UberEats</span>
           <span className="text-2xl font-black text-white uppercase tracking-tighter italic">FoodPanda</span>
           <span className="text-2xl font-black text-white uppercase tracking-tighter italic">Deliveroo</span>
           <span className="text-2xl font-black text-white uppercase tracking-tighter italic">DoorDash</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
