'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/about', label: 'À propos' },
    { href: '/competences', label: 'Compétences' },
    { href: '/projets', label: 'Projets' },
    { href: '/reflexion', label: 'Réflexion' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 fixed top-0 z-50 text-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="font-bold text-lg text-cyan-400 tracking-wide hover:text-cyan-300 transition">
          Côme <span className="text-white font-light">| Portfolio</span>
        </Link>
        
        {/* Liens Desktop (Ordinateur) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cyan-400 transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bouton Burger (Mobile uniquement) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Déroulant Minimaliste (Mobile uniquement) */}
        {isOpen && (
          <div className="absolute top-16 right-4 w-48 bg-slate-950 border border-slate-800 rounded-lg shadow-xl py-2 flex flex-col md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={closeMenu}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-colors px-4 py-2.5 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}