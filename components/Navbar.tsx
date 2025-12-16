import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Heart, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  openBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openBooking }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        
        {/* Logo Section - Cuter & More Feminine */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="relative w-12 h-12 flex items-center justify-center">
             <div className="absolute inset-0 bg-rose-100 rounded-full animate-pulse-slow"></div>
             <div className="relative z-10 text-rose-500 transform group-hover:rotate-12 transition-transform duration-300">
                <Crown size={28} fill="currentColor" className="text-rose-400" />
                <Heart size={12} fill="currentColor" className="absolute -bottom-1 -right-1 text-gold-400" />
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-script text-3xl leading-none text-rose-500 drop-shadow-sm">Pearl</span>
            <span className="font-sans text-[0.65rem] tracking-[0.25em] font-bold uppercase text-gray-500 ml-1 group-hover:text-rose-400 transition-colors">Pearl By Payel</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 relative group py-2
                ${isActive(link.path) ? 'text-rose-600' : 'text-gray-700 hover:text-rose-500'}
              `}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-400 transition-all duration-300 rounded-full
                ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </Link>
          ))}
          
          <button 
            onClick={openBooking}
            className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Sparkles size={16} /> Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 p-2 hover:bg-rose-50 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden bg-white border-t border-rose-50 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors
                ${isActive(link.path) ? 'bg-rose-50 text-rose-600' : 'text-gray-600 hover:bg-rose-50 hover:text-rose-500'}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              openBooking();
              setIsMenuOpen(false);
            }}
            className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};