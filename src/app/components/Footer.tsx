// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPizzaSlice } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <FaPizzaSlice className='w-8 h-8 text-orange-400 group-hover:rotate-12 transition-transform duration-300' />
              <span className="text-white text-2xl font-black uppercase tracking-tighter">Pizza<span className="text-orange-400">Flow</span></span>
            </Link>
            <p className="text-red-200/60 max-w-sm text-lg">
              Crafting the finest pizzas with passion and precision since 2024. 
              Quality ingredients, lightning-fast delivery.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-orange-400">Navigation</h4>
            <ul className="space-y-4 text-red-100/70">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="#menu" className="hover:text-orange-400 transition-colors">Our Menu</Link></li>
              <li><Link href="#deals" className="hover:text-orange-400 transition-colors">Special Deals</Link></li>
              <li><Link href="#reservation" className="hover:text-orange-400 transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-orange-400">Contact Us</h4>
            <ul className="space-y-4 text-red-100/70">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>123 Pizza Avenue, Food District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>hello@pizzaflow.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-red-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-red-200/40 font-medium">
          <p>© 2026 PizzaFlow. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-red-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
