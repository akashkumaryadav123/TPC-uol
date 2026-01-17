
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { AuthState, UserRole } from '../types';

interface NavbarProps {
  auth: AuthState;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ auth, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-uol-blue text-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center">
            <i className={`fas fa-university ${isScrolled ? 'text-uol-blue' : 'text-uol-blue'}`}></i>
          </div>
          <div>
            <h1 className={`font-bold text-lg leading-tight ${isScrolled ? 'text-uol-blue' : 'text-white'}`}>UoL TPC</h1>
            <p className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>University of Lucknow</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path.replace('#', '')}
              className={`text-sm font-medium hover:text-uol-gold transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {auth.isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {auth.role === UserRole.ADMIN && (
                <Link 
                  to="/admin" 
                  className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all ${
                    isScrolled ? 'border-uol-blue text-uol-blue hover:bg-uol-blue hover:text-white' : 'border-white text-white hover:bg-white hover:text-uol-blue'
                  }`}
                >
                  Dashboard
                </Link>
              )}
              <button 
                onClick={onLogout}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full bg-red-500 text-white hover:bg-red-600`}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className={`text-sm font-semibold px-6 py-2 rounded-full transition-all ${
                isScrolled ? 'bg-uol-blue text-white hover:bg-uol-blue/90' : 'bg-uol-gold text-white hover:bg-uol-gold/90'
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none ${isScrolled ? 'text-uol-blue' : 'text-white'}`}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path.replace('#', '')}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
            >
              {item.label}
            </Link>
          ))}
          {auth.isAuthenticated ? (
            <>
              {auth.role === UserRole.ADMIN && (
                <Link to="/admin" onClick={() => setIsOpen(false)} className="text-uol-blue font-semibold">Admin Dashboard</Link>
              )}
              <button 
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="w-full text-center bg-red-500 text-white py-3 rounded-lg font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-uol-blue text-white py-3 rounded-lg font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
