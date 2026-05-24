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
    <nav className="w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 fixed top-0 z-50 text-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="font-bold text-lg text-cyan-400 tracking-wide hover:text-cyan-300 transition z-50">
          Côme <span className="text-white font-light">| Portfolio</span>
        </Link>
        
        {/* Liens Desktop (Masqués sur mobile) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cyan-400 transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bouton Burger Mobile (Masqué sur desktop) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {isOpen ? (
              // Icône Fermer (X)
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Icône Menu (3 barres)
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Rideau Menu Mobile Overlay */}
        <div className={`
          fixed inset-0 bg-slate-950/98 flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-transform duration-300 ease-in-out md:hidden z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition transform hover:scale-105 duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}