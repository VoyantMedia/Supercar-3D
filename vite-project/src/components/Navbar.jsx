import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-20 backdrop-blur-lg py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" className="w-8 h-8 mr-2" alt="Logo" /> {/* Replace with your logo */}
                    <span className="text-gray-300 hover:text-white text-lg font-semibold cursor-pointer">Logo Name</span>
                </div>
                <div className="flex gap-6">
                    <a href="#charging" className="text-gray-300 hover:text-white text-lg font-semibold cursor-pointer">Charging</a>
                    <a href="#wheels" className="text-gray-300 hover:text-white text-lg font-semibold cursor-pointer">Wheels</a>
                    <a href="#contact" className="text-gray-300 hover:text-white text-lg font-semibold cursor-pointer">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
