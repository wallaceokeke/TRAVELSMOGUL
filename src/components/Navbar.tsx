import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Moon, Sun, Compass } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn, darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Compass className={`h-8 w-8 ${isScrolled ? 'text-amber-600' : 'text-white'} dark:text-amber-400`} />
            <span className={`text-xl font-serif font-bold ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              Travels Mogul
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#packages" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-amber-600 dark:text-gray-300' : 'text-white hover:text-amber-200'
            }`}>
              Journeys
            </a>
            <a href="#explore" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-amber-600 dark:text-gray-300' : 'text-white hover:text-amber-200'
            }`}>
              Explore
            </a>
            <a href="#about" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-amber-600 dark:text-gray-300' : 'text-white hover:text-amber-200'
            }`}>
              About
            </a>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : 'hover:bg-white/10'
              }`}
            >
              {darkMode ? (
                <Sun className={`h-5 w-5 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
              ) : (
                <Moon className={`h-5 w-5 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
              )}
            </button>

            {/* Login/Profile */}
            {isLoggedIn ? (
              <Link
                to="/profile"
                className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'bg-amber-600 text-white hover:bg-amber-700' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className={`px-6 py-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'bg-amber-600 text-white hover:bg-amber-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 mx-4">
            <div className="py-2 space-y-1">
              <a href="#packages" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Journeys
              </a>
              <a href="#explore" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Explore
              </a>
              <a href="#about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                About
              </a>
              {isLoggedIn ? (
                <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="block px-4 py-2 text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;