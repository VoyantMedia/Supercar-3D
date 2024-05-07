import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
        </div>
        {/* Menu Items */}
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            <li><a href="#showcase">Showcase</a></li>
            <li><a href="#gear">Gear</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
