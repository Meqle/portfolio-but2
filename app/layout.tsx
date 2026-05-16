import './globals.css'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Portfolio - Côme',
  description: 'Mon portfolio de BUT 2 Informatique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-900 antialiased flex flex-col min-h-screen">
        
        {/* Barre de navigation globale (Header) */}
        <nav className="w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 fixed top-0 z-50 text-white">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-cyan-400 tracking-wide hover:text-cyan-300 transition">
              Côme <span className="text-white font-light">| Portfolio</span>
            </Link>
            
            <div className="flex space-x-6 text-sm font-medium text-slate-300">
              <Link href="/about" className="hover:text-cyan-400 transition">À propos</Link>
              <Link href="/competences" className="hover:text-cyan-400 transition">Compétences</Link>
              <Link href="/projets" className="hover:text-cyan-400 transition">Projets</Link>
              <Link href="/reflexion" className="hover:text-cyan-400 transition">Réflexion</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
            </div>
          </div>
        </nav>
        
        {/* Contenu dynamique des pages */}
        <div className="pt-16 flex-grow flex flex-col">
          {children}
        </div>

        {/* Pied de page global (Footer) */}
        <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-6 pt-12">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-300">Côme — Étudiant BUT Informatique</p>
              <p className="text-xs text-slate-500 mt-0.5">Parcours Réalisation d'Applications (RACA)</p>
            </div>
            
            <div className="flex space-x-6 text-xs text-slate-400 items-center">
              {/* Information textuelle sobre et non cliquable */}
              <div className="flex items-center gap-1.5 font-medium text-slate-500">
                <span>📍</span> IUT d'Amiens
              </div>
              <span className="text-slate-800">|</span>
              <p>© {new Date().getFullYear()} — Tous droits réservés</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}