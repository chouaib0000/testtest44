import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export default function Header({ isAuthenticated, setIsAuthenticated }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Offres', path: '/#offres', id: 'offres' },
    { name: 'Pourquoi nous ?', path: '/#pourquoi', id: 'pourquoi' },
    { name: 'Comment ça marche ?', path: '/#comment', id: 'comment' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/assets/logo.png" 
            alt="Premium Assurances" 
            className="h-12 w-17 object-contain"
          />
          <span className="text-xl font-bold text-gray-800"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => link.id && handleNavClick(e, link.id)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          
          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Déconnexion
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 transition-transform duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => link.id && handleNavClick(e, link.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/admin" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Déconnexion
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}