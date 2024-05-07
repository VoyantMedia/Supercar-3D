import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 p-4 w-full flex justify-between items-center bg-opacity-30 backdrop-filter backdrop-blur-lg">
      {/* Smooth Scroll Navigation Items */}
      <Link to="home" smooth={true} duration={1000} className="text-white cursor-pointer">Home</Link>
      <Link to="about" smooth={true} duration={1000} className="text-white cursor-pointer">About</Link>
      <Link to="wheels" smooth={true} duration={1000} className="text-white cursor-pointer">Wheels</Link>
      <Link to="contact" smooth={true} duration={1000} className="text-white cursor-pointer">Contact</Link>
    </div>
  );
}

export default Navbar;
