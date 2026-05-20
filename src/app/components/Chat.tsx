'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubblesOutline, IoClose, IoSend, IoPizzaOutline } from "react-icons/io5";
import { ALL_PRODUCTS } from '@/data/products';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Assalam-o-Alikum! 👋 Welcome to PizzaFlow - where every slice tells a story of authentic flavor. How may I assist you with our menu, deals, or delivery services today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      let botText = "That's a great question! Let me check that for you.";
      const lowInput = input.toLowerCase();

      if (lowInput.includes('menu') || lowInput.includes('pizzas') || lowInput.includes('list')) {
        // Group products by category for a more professional display
        const groupedByCategory = ALL_PRODUCTS.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {} as Record<string, typeof ALL_PRODUCTS>);

        // Category emojis for visual appeal
        const categoryEmojis: Record<string, string> = {
          'Specialty': '🌟',
          'Classic': '🇮🇹',
          'Vegetarian': '🥬',
          'Tropical': '🌶️',
          // Default for any other categories
          'default': '🍕'
        };

        let menuText = 'Here is our exquisite menu:\n\n';

        Object.keys(groupedByCategory).forEach((category, index) => {
          const emoji = categoryEmojis[category] || categoryEmojis['default'];
          menuText += `${emoji} *${category}*\n`;

          groupedByCategory[category].forEach(product => {
            // Calculate prices for different sizes
            const smallPrice = Math.round(product.price * 0.8); // 80% of base price
            const regularPrice = product.price; // Base price
            const largePrice = Math.round(product.price * 1.2); // 120% of base price

            menuText += `  • ${product.title}\n`;
            menuText += `    Small: PKR ${smallPrice.toLocaleString()} | Regular: PKR ${regularPrice.toLocaleString()} | Large: PKR ${largePrice.toLocaleString()}\n`;
          });

          // Add spacing between categories (except after last one)
          if (index < Object.keys(groupedByCategory).length - 1) {
            menuText += '\n';
          }
        });

        menuText += '\nOur pizzas are crafted with fresh ingredients and authentic flavors. '
                  + 'Size options: Small (8\" slices), Regular (10\" slices), Large (12\" slices). '
                  + 'Which one would you like to savor today? 🍕';
        botText = menuText;
      } else if (lowInput.includes('order')) {
        botText = "For order tracking, please provide your Receipt ID. Our support team will assist you with real-time updates on your delivery status. Thank you for choosing PizzaFlow! 🙏";
      } else if (lowInput.includes('deal') || lowInput.includes('offer') || lowInput.includes('discount')) {
        botText = "Current Promotions at PizzaFlow:\n\n🌟 Dual Delight: Buy One Get One Free on select pizzas\n🕐 Happy Hour: 50% OFF all orders between 5:00 PM - 7:00 PM\n🚚 Complimentary delivery on orders exceeding PKR 2,000\n\nTerms and conditions apply. Visit our website for complete details.";
      } else if (lowInput.includes('delivery')) {
        botText = "Our Delivery Service:\n\n📍 Coverage: Serving all major areas within the city\n⏱️ Estimated Time: 30-45 minutes depending on location and traffic\n📦 Safety: Contactless delivery with temperature-controlled packaging\n💬 Guarantee: If we exceed the estimated time, we'll compensate with a complimentary side on your next order\n\nFor real-time tracking, please use your order ID.";
      } else if (lowInput.includes('price') || lowInput.includes('cost')) {
        botText = "PizzaFlow Pricing Structure:\n\n💫 Our pizzas range from PKR 749 to PKR 999, offering options for every budget\n💰 Value Proposition: Premium ingredients, authentic recipes, and generous toppings\n📋 Detailed pricing is available in our complete menu above\n\nAll prices are in Pakistani Rupees (PKR) and inclusive of applicable taxes.";
      } else if (lowInput.includes('hi') || lowInput.includes('hello') || lowInput.includes('hey')) {
        botText = "Welcome to PizzaFlow! 👋 How may I enhance your dining experience today? You can inquire about our menu selections, ongoing promotions, delivery services, or place an order.";
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botText,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110 active:scale-95 group relative"
        >
          <IoChatbubblesOutline size={30} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          {/* Tooltip */}
          <div className="absolute right-20 bg-white text-gray-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
            Need help? Chat with us!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 bg-red-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                <IoPizzaOutline size={24} />
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tight text-sm">PizzaFlow Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-red-200 font-bold uppercase tracking-widest">Online Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages Section */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-orange-500 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 font-bold px-1">{msg.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2.5 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-200"
            >
              <IoSend size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;