import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; 
import "./Navbar.css";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div className='navbar'>
      <div className='w-full border-2 border-zinc-800 h-7 text-center'>Summer sale discount off <span className="text-red-600">50%</span> Shop Now</div>
      <nav className="bg-gray-800" role="navigation">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="w-[14rem]"><img width="66%" src={logo} alt="" /></a>
          
          {/* Navbar Links */}
          <div className="navbar-text hidden md:flex md:items-center md:space-x-8">
            <a href="/" style={{'--i': 2}} className="text-gray-300 hover:text-white">Shop</a>
            <a href="/mens" style={{'--i': 1}} className="text-gray-300 hover:text-white">Men</a>
            <a href="/womens" style={{'--i': 3}} className="text-gray-300 hover:text-white">Women</a>
            <a href="/login" style={{'--i': 4}}><button className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300">Login</button></a>
            <a href="/cart" style={{'--i': 5}} className="text-gray-300 hover:text-white"><i className='bx bx-cart ml-[1.9rem]'></i></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button id="mobile-menu-toggle" className="text-white" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (hidden or shown based on isMobileMenuOpen state) */}
        <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-gray-700`}>
          <a href="/" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Shop</a>
          <a href="/mens" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Men</a>
          <a href="/womens" className="block py-2 px-4 text-sm text-white hover:bg-gray-600">Women</a>
          <a href="/login" className="block py-2 px-4 text-sm text-white hover:bg-gray-600"><button>Login</button></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
