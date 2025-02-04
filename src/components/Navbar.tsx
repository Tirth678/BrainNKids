// import React, { useState } from 'react';
import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold text-black">Brain N Kids</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-black hover:text-purple-400">Courses</a>
            <a href="#about" className="text-black hover:text-purple-400">About</a>
            <a href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#courses" className="block px-3 py-2 text-black hover:text-purple-400">
                Courses
              </a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-purple-400">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-purple-400">
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