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
            
            <div className="flex space-x-4 text-xs text-slate-400 items-center">
              <div className="flex items-center gap-1.5 font-medium text-slate-500">
                <span>📍</span> IUT d'Amiens
              </div>
              
              <span className="text-slate-800">|</span>
              
              {/* Nouveau lien GitHub intégré dans le footer */}
              <a 
                href="https://github.com/Meqle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors font-medium"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <span className="text-slate-800">|</span>
              
              <p>© {new Date().getFullYear()} — Tous droits réservés</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}