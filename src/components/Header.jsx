import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="w-full bg-[#4B2E83]">
        <div style={{ width: '100%' }} className="mx-auto px-2 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wide flex items-center">
              <img src="/klogo.webp" style={{ width: '130px', height:'16px', maxWidth: '130px', objectfit: 'contain' }}/>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH THE ENTIRE STORE..."
                className="w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-[#FFD700] rounded-r-md hover:bg-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center text-sm cursor-pointer select-none">
              Eng
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="relative">
              <Link to="/cart" className="text-white hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFD700] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            <Link to="/profile" className="text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className="w-full bg-gray-100 shadow-sm">
        <div style={{ width: '100%' }} className="mx-auto px-2">
          <div className="flex items-center h-12">
            {/* Categories Button */}
            <button className="bg-[#4B2E83] text-white px-4 py-1.5 rounded flex items-center hover:bg-[#3d2569] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              All Categories
            </button>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 ml-8">
              <Link to="/ramadan" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">🌙</span>
                Ramadan Offers
              </Link>
              <Link to="/rush-delivery" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">🚚</span>
                Rush delivery
              </Link>
              <Link to="/sale" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">🏷️</span>
                On Sale
              </Link>
              <Link to="/events" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">📅</span>
                Events
              </Link>
              <Link to="/brands" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">🔗</span>
                Brands
              </Link>
              <Link to="/for-you" className="flex items-center text-gray-700 hover:text-[#4B2E83] transition-colors">
                <span className="mr-1">👤</span>
                For You
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 