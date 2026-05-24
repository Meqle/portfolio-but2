'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d6f70cfb-73bf-4c05-8b71-919a846daf33",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-12">
        
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">Me Contacter</h2>
          <p className="text-slate-400 mt-2">
            Entreprises, enseignants ou futurs collaborateurs : n'hésitez pas à me laisser un message ou à utiliser mes coordonnées directes.
          </p>
        </section>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INFORMATIONS DIRECTES (2/5) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>📌</span> Coordonnées professionnelles
            </h3>
            
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6">
              
              {/* Email Personnel */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Adresse Email</span>
                <p className="text-sm font-medium text-cyan-400 select-all">
                  vermeulen.come@gmail.com
                </p>
                <p className="text-xs text-slate-500">Contact direct & personnel</p>
              </div>

              {/* Téléphone */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Téléphone</span>
                <p className="text-sm font-medium text-slate-200">
                  <a href="tel:+33769951415" className="hover:text-cyan-400 transition-colors">07 69 95 14 15</a>
                </p>
                <p className="text-xs text-slate-500">Ligne directe</p>
              </div>

              {/* Localisation */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Localisation actuelle</span>
                <p className="text-sm font-medium text-slate-200">
                  Amiens, Hauts-de-France
                </p>
                <p className="text-xs text-slate-500">IUT d'Amiens — Campus Saint-Leu</p>
              </div>

              {/* Perspectives de BUT 3 */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Objectifs BUT 3 / Mobilité</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ouvert aux opportunités professionnelles pour ma troisième année :
                  </p>
                  <ul className="text-xs space-y-1 text-slate-400 list-disc pl-4">
                    <li>Stage de 4 mois à l'international <span className="text-cyan-400 font-medium">(Projet Vietnam)</span></li>
                    <li>Stage de fin d'études rémunéré en France</li>
                    <li>Contrat d'alternance annuel</li>
                  </ul>
                </div>

                {/* Liens Réseaux Professionnels (GitHub & LinkedIn) */}
                <div className="pt-4 border-t border-slate-900 flex flex-col gap-2">
                  <a 
                    href="https://github.com/Meqle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-medium py-2 px-3 rounded-lg border border-slate-800 transition-all shadow-sm"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Consulter mon profil GitHub
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/c%C3%B4me-vermeulen-4b601a38b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-medium py-2 px-3 rounded-lg border border-slate-800 transition-all shadow-sm"
                  >
                    <svg className="h-4 w-4 fill-current text-[#0a66c2]" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Me rejoindre sur LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>✉️</span> Envoyer un message
            </h3>

            <form onSubmit={handleSubmit} className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-5">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Nom complet / Entreprise
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Votre nom ou entreprise"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Adresse de réponse
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="adresse@exemple.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Votre message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Laissez votre message ici..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-4 rounded-lg transition-colors text-sm shadow-md"
              >
                Envoyer le message
              </button>

              {submitted && (
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-400 font-medium">
                    ✨ Message envoyé avec succès !
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}