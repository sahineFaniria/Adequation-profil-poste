import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-10 text-sm text-gray-900 shadow-sm focus-visible:outline-none focus:border-blue-100 focus:bg-gray-100 focus:text-gray-500 focus:ring-blue-500 transition-colors"
        placeholder="Chercher..."
      />
      {/* <div className=" circlePosition w-60 h-60 bg-blue-600 rounded-full absolute z-1 top-0 left-0  "></div> */}
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 transition-colors" />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <FaTimes className="w-4 h-4 hover:text-gray-500"/>
        </button>
      )}
    </div>
  );
}
