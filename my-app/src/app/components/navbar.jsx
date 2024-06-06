import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 md:py-9">
      <nav className="flex flex-wrap items-center justify-between container mx-auto">
        <div className="text-2xl md:text-3xl font-bold">Info</div>
        <ul className="flex flex-wrap space-x-8">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Page</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
