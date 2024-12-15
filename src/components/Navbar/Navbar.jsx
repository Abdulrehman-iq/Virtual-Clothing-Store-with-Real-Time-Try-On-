import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import CartDrawer from '../CartDrawer/CartDrawer';
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary-900 shadow-lg backdrop-blur-sm'
        : 'bg-primary-900/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                src="/src/assets/Fyplogo.jpg" 
                alt="Store Logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-surface-light hover:text-interactive-hover transition-colors duration-300 font-medium text-xl">
              Home
            </Link>
            <Link to="/shop" className="text-surface-light hover:text-interactive-hover transition-colors duration-300 font-medium text-xl">
              Shop
            </Link>
            <Link to="/about" className="text-surface-light hover:text-interactive-hover transition-colors duration-300 font-medium text-xl">
              About Us
            </Link>
            <Link to="/contact" className="text-surface-light hover:text-interactive-hover transition-colors duration-300 font-medium text-xl">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <FiSearch className="h-7 w-7 text-surface-light hover:text-interactive-hover transition-colors duration-300 cursor-pointer" />
            <div 
              onClick={() => setIsCartOpen(true)} 
              className="cursor-pointer"
            >
              <FiShoppingCart className="h-7 w-7 text-surface-light hover:text-interactive-hover transition-colors duration-300" />
            </div>
            <div 
              onClick={() => setIsProfileOpen(true)}
              className="cursor-pointer"
            >
              <FiUser className="h-7 w-7 text-surface-light hover:text-interactive-hover transition-colors duration-300" />
            </div>
            <button 
              className="md:hidden text-surface-light hover:text-interactive-hover"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <FiX className="h-8 w-8" /> : 
                <FiMenu className="h-8 w-8" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-primary-700">
            <Link to="/" className="block px-3 py-2 text-surface-light hover:text-interactive-hover hover:bg-primary-800 rounded-md transition-all duration-300">
              Home
            </Link>
            <Link to="/shop" className="block px-3 py-2 text-surface-light hover:text-interactive-hover hover:bg-primary-800 rounded-md transition-all duration-300">
              Shop
            </Link>
            <Link to="/about" className="block px-3 py-2 text-surface-light hover:text-interactive-hover hover:bg-primary-800 rounded-md transition-all duration-300">
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-surface-light hover:text-interactive-hover hover:bg-primary-800 rounded-md transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Drawers */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProfileDrawer isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </nav>
  );
};

export default Navbar;