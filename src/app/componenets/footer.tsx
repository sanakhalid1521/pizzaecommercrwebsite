// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-orange-600  text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo and Name */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Flavorful Pizza</h2>
          <p className="text-sm">The best pizzas in town!</p>
        </div>
        
        {/* Links */}
        <div className="flex flex-col items-center space-y-4 mb-4">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-600">Home</a>
            <a href="#" className="hover:text-cyan-600">Menu</a>
            <a href="#" className="hover:text-cyan-600">About Us</a>
            <a href="#" className="hover:text-cyan-600">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500" aria-label="Facebook">
              <FaFacebook size={40} color='blue'/>
            </a>
            <a href="#" className="hover:text-orange-500" aria-label="Instagram">
              <FaInstagram size={40} color='red'/>
            </a>
            <a href="#" className="hover:text-gray-600" aria-label="Twitter">
              <FaTwitter size={40} color='blue' />
            </a>
            <a href="#" className="hover:text-orange-500" aria-label="WhatsApp">
              <FaWhatsapp size={40} color='green' />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          ©  Sana Khalid. Designed with passion for pizza lovers everywhere.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
