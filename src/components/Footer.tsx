import React from 'react';
import { Instagram, MessageCircle, Music, Twitter, Compass, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold">Travels Mogul</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Where Africa meets the world. We craft soulful journeys that connect cultures, 
              honor traditions, and create transformative experiences across the globe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+254 706 142076</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">brownwallace20@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-amber-400 transition-colors">Journeys</a></li>
              <li><a href="#explore" className="text-gray-300 hover:text-amber-400 transition-colors">Explore</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Booking Help</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Reviews</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400">Follow us:</span>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Currency:</span>
              <select className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="USD">USD</option>
                <option value="KES">KES</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Travels Mogul. All rights reserved. Crafted with ❤️ in Kenya.
          </p>
          <p className="text-gray-500 text-sm mt-2 italic">
            "Where every journey tells a story, and every story changes a life."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;