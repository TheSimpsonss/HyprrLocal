import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, User } from 'lucide-react';
import { NAV_LINKS } from '../types';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for extra glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 
      ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-white/70 backdrop-blur-md'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="bg-indigo-600 p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
              <ShoppingBag size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-indigo-900 group-hover:text-indigo-700 transition-colors">
              Hyperlocal
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 font-medium hover:text-indigo-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-600 font-medium hover:text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors flex items-center gap-2">
              <User size={18} />
              Partner Login
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Become a Seller
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-xl transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="h-px bg-slate-100 my-2"></div>
          
          <div className="flex flex-col space-y-3 px-2">
            <button className="w-full text-left font-medium text-slate-600 hover:text-indigo-600 py-3 flex items-center gap-2">
              <User size={20} />
              Partner Login
            </button>
            <button className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;