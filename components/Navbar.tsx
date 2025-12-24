import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Revendedores', path: '/revendedores' },
    { name: 'Galeria & Eventos', path: '/galeria' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-rossner-dark/95 backdrop-blur-md border-b border-rossner-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/xtLbGnQz/Whats-App-Image-2025-12-10-at-10-23-50-3.jpg" 
              alt="Rossner Audio" 
              className="h-10 md:h-12 w-auto object-contain rounded-md border-2 border-transparent group-hover:border-rossner-red/20 transition-all duration-300" 
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl tracking-widest text-white leading-none group-hover:text-gray-200 transition-colors">
                ROSSNER
              </span>
              <span className="font-sans font-bold text-xs md:text-sm tracking-[0.4em] text-rossner-red leading-none">
                AUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-rossner-red bg-white/5 border-b-2 border-rossner-red'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-rossner-dark border-b border-rossner-red/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold uppercase ${
                  isActive(link.path)
                    ? 'text-rossner-red bg-white/5 border-l-4 border-rossner-red'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;