'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { cn } from '../utils/utils';
import Button from './UI/Button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-color shadow-md backdrop-blur-sm'
          : 'bg-transparent',
        isMenuOpen && 'bg-bg-color shadow-md'
      )}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link to='/' className='text-lg font-bold text-white '>
            Sacol,
            <span className='font-custom font-thin'> Harvey Louise</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors text-black',
                  location.pathname === item.href
                    ? 'text-30-percent font-semibold'
                    : 'text-white hover:text-primary'
                )}>
                {item.name}
              </Link>
            ))}
            <Button />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden inline-flex items-center justify-center rounded-md bg-transparent hover:bg-gray-100 h-9 w-9'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <FiX className='h-6 w-6 text-white' />
            ) : (
              <FiMenu className='h-6 w-6 text-white' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden h-[calc(100vh-4rem)] bg-bg-color'>
          <nav className='flex flex-col px-4 py-6 space-y-6'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-lg font-medium transition-colors',
                  location.pathname === item.href
                    ? 'text-30-percent font-semibold'
                    : 'text-white hover:text-primary'
                )}
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Button className='text-black' />
          </nav>
        </div>
      )}
    </header>
  );
}
