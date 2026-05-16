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

              {/* Localisation */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Localisation actuelle</span>
                <p className="text-sm font-medium text-slate-200">
                  Amiens, Hauts-de-France
                </p>
                <p className="text-xs text-slate-500">IUT d'Amiens — Campus Saint-Leu</p>
              </div>

              {/* Perspectives de BUT 3 */}
              <div className="space-y-2">
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