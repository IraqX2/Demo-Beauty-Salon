import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  openBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openBooking }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-rose-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="font-serif text-3xl font-bold flex items-center gap-2">
              <span className="text-rose-400 font-script text-4xl">Pearl</span> By Payel
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Where elegance meets expertise. We believe every woman deserves to feel confident, pampered, and beautiful.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-rose-400 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services & Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-white hover:translate-x-1 transition-all inline-block">Customer Reviews</Link></li>
              <li><button onClick={openBooking} className="hover:text-white hover:translate-x-1 transition-all text-left">Book Appointment</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-rose-400 font-serif">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Open Daily: 10:00 AM - 9:00 PM
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Pearl By Payel. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for Beauty</span>
        </div>
      </div>
    </footer>
  );
};