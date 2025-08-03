import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';
import Button from '../ui/Button';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className="relative px-3 py-2 text-white hover:text-electric-blue transition-colors duration-300 group"
    onClick={onClick}
  >
    <span className="glitch-hover" data-text={children}>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal bg-opacity-90 backdrop-blur-md py-3 shadow-neon-blue' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-code font-bold flex items-center gap-2 text-electric-blue hover:animate-glow-pulse transition duration-300"
          >
            <Code size={24} className="text-electric-blue" />
            <span>Wallace.Okeke</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#demo">Bot Demo</NavLink>
            <div className="ml-4 flex items-center space-x-3">
              <a href="https://github.com/wallaceokeeke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-electric-blue transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/wallaceokeke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-violet transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-dark-charcoal bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-96 py-4 border-b border-electric-blue opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="flex flex-col space-y-3 px-4">
          <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink href="#demo" onClick={() => setMobileMenuOpen(false)}>Bot Demo</NavLink>
          <div className="flex space-x-4 py-2">
            <a href="https://github.com/wallaceokeeke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-electric-blue transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/wallaceokeke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-violet transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;