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
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
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

        {/* Bouton Burger / Croix Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none z-50 fixed right-4 top-3"
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

        {/* Rideau Menu Mobile Plein Écran */}
        <div className={`
          fixed inset-0 h-screen w-screen bg-slate-950/98 flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-all duration-300 ease-in-out md:hidden z-40
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className="text-slate-200 hover:text-cyan-400 transition-colors duration-200 text-2xl tracking-wide py-2 w-full text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}