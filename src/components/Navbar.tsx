"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Activities', href: '#activities' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-100/20 dark:border-slate-800 shadow-sm top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105 bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="LifeSkills Institute Logo" fill className="object-contain" />
              </div>
              <span className="font-extrabold text-xl lg:text-2xl text-[var(--primary)] dark:text-[var(--primary-light)] hidden md:block tracking-tight">
                LifeSkills Institute
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-5 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-white font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 ml-4 border-l border-gray-200 dark:border-slate-700 pl-5">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              )}
              <Link href="/login" className="text-gray-700 dark:text-gray-200 font-medium hover:text-[var(--primary)] dark:hover:text-white transition-colors px-2">
                Login
              </Link>
              <Link href="/register" className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[var(--primary-hover)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button (visual only for now) */}
          <div className="lg:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400"
              >
                {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
              </button>
            )}
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
