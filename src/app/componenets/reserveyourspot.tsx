'use client'
import React, { useState } from 'react';

const ReservYourSpot: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert(`Reservation made for ${name} on ${date} at ${time} for ${partySize} people.`);
  };

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Make a Reserv Your Spot</h2>
      <form onSubmit={handleSubmit} className="bg-red-500 p-6 rounded shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2" 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2" 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Reservation Date</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2" 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Reservation Time</label>
          <input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2" 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="partySize" className="block text-gray-700">Party Size</label>
          <input 
            type="number" 
            id="partySize" 
            value={partySize} 
            onChange={(e) => setPartySize(Number(e.target.value))} 
            min="1" 
            className="mt-1 block w-full border border-gray-300 rounded p-2" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
          Reserve Now
        </button>
      </form>
    </section>
  );
};

export default ReservYourSpot;
