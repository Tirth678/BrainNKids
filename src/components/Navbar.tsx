import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/brainnkids-logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="Brain N Kids Logo" 
                className="h-12 w-12 object-cover"
              />
            </Link>
            <Link to="/" className="ml-2 text-xl font-bold text-white">Brain N Kids</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-white hover:text-red-500">Courses</Link>
            <Link to="/about" className="text-white hover:text-red-500">About</Link>
            <a href="#contact" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/courses" 
                className="block px-3 py-2 text-white hover:text-red-400"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:text-red-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-white hover:text-red-400"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;