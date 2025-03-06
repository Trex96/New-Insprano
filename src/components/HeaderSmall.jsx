"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function HeaderSmall() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden w-full fixed top-0 z-50">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center text-white">
          <p>Insprano</p>
        </Link>
        
        <button
          onClick={toggleMenu}
          className="text-white bg-black rounded-full p-2 focus:outline-none hover:bg-gray-800 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile menu - slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pt-20 px-4 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            href="/timeline"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-800"
          >
            Timeline
          </Link>
          <Link
            href="/merchandise"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-800"
          >
            Merchandise
          </Link>
          <Link
            href="/competitions"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-800"
          >
            Competitions
          </Link>
        </div>
      </div>
    </nav>
  );
};
