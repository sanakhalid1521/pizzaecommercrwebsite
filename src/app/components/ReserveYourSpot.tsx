'use client'
import React, { useState } from 'react';

const ReserveYourSpot: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setPartySize(1);
    }, 5000);
  };

  return (
    <section id="reservation" className="py-20 bg-gradient-to-b from-orange-400 to-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Form Info Section */}
          <div className="md:w-1/3 bg-red-900 p-10 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6 leading-tight">Book Your Table</h2>
            <p className="text-red-200 mb-8">Join us for an unforgettable pizza experience. Secure your spot now!</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-orange-400">📍</span>
                <span>123 Pizza Street, Food City</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-orange-400">📞</span>
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-2/3 p-10 relative">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Reservation Confirmed!</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Thank you, <span className="font-bold text-red-600">{name}</span>! Your table for {partySize} is booked for {date} at {time}. We&apos;ve sent a confirmation to your email.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-orange-600 font-bold hover:underline"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="partySize" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Party Size</label>
                  <input 
                    type="number" 
                    id="partySize" 
                    value={partySize} 
                    onChange={(e) => setPartySize(Number(e.target.value))} 
                    min="1" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                    required 
                  />
                </div>

                <div className="md:col-span-2 mt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 text-white font-black py-4 rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveYourSpot;
