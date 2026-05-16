export default function Competences() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">Compétences & Expériences</h2>
          <p className="text-slate-400 mt-2">Synthèse de mon parcours académique, de mes compétences techniques et de mes expériences professionnelles.</p>
        </section>

        {/* Section Parcours */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">Mon Parcours</h3>
          <div className="relative border-l border-slate-800 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-cyan-500 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-200">BUT Informatique — Parcours RACA (Réalisation d'Applications)</h4>
              <p className="text-sm text-cyan-400">IUT — En cours (BUT 2)</p>
              <p className="text-sm text-slate-400 mt-1">Approfondissement du développement logiciel, de la conception web, de l'architecture des applications et de la gestion des bases de données.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-slate-700 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-300">Classe Préparatoire Intégrée</h4>
              <p className="text-sm text-slate-400">EPITA (École d'Ingénieurs en Informatique) — 6 mois</p>
              <p className="text-sm text-slate-400 mt-1">Apprentissage de la rigueur mathématique et logique, découverte de la programmation de bas niveau et fonctionnelle.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-slate-700 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-300">Baccalauréat Général</h4>
              <p className="text-sm text-slate-400">Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques)</p>
              <p className="text-sm text-slate-400 mt-1">Première initiation aux algorithmes et aux structures de données.</p>
            </div>
          </div>
        </section>

        {/* Section Compétences Techniques */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">Compétences Techniques (PN)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Carte Web & Backend */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h4 className="text-cyan-400 font-bold mb-3">Développement Web & BD</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">PHP</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">SQL (MySQL)</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">HTML5 / CSS3</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">JavaScript</span>
              </div>
            </div>

            {/* Carte Logiciel */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h4 className="text-cyan-400 font-bold mb-3">Programmation Applicative</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">C</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">C++</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">C#</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">OCaml</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">Python</span>
              </div>
            </div>

            {/* Carte Outils mis à jour avec phpMyAdmin */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 md:col-span-2">
              <h4 className="text-cyan-400 font-bold mb-3">Outils & Environnements</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-950 text-cyan-400 text-xs px-3 py-1 rounded-md border border-cyan-800 font-medium">VS Code (Principal)</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">WAMP64</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">phpMyAdmin</span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">Git / GitHub</span>
                <span className="bg-slate-900 text-slate-500 text-xs px-3 py-1 rounded-md border border-slate-800/50 italic">PHPStorm (Académique)</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section Expériences Professionnelles */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">Expériences Professionnelles</h3>
          <div className="space-y-4">
            
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="font-bold text-slate-200 text-lg">Développeur Web Stagiaire</h4>
                <span className="text-sm text-cyan-400 font-medium">Janv. — Mars 2026 (2 mois)</span>
              </div>
              <p className="text-sm text-slate-400 italic mt-1">Pink Studio Amiens (Salon de tatouage) — Stage de BUT 2</p>
              <p className="text-sm text-slate-300 mt-2">
                Conception et réalisation complète en autonomie d'un site web dynamique avec modélisation et administration de la base de données sous phpMyAdmin (PHP, SQL, WAMP64, VS Code).
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="font-bold text-slate-200 text-lg">Équipier Polyvalent</h4>
                <span className="text-sm text-slate-400 font-medium">Courant 2024 (2 mois)</span>
              </div>
              <p className="text-sm text-slate-400 italic mt-1">McDonald's — Job d'été / étudiant</p>
              <p className="text-sm text-slate-300 mt-2">
                Développement de la gestion du stress, de l'efficacité opérationnelle en équipe et du respect des cadences soutenues.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="font-bold text-slate-300 text-lg">Employé de mise en rayon <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded ml-2 font-normal">À venir</span></h4>
                <span className="text-sm text-slate-500 font-medium">Été 2026 (2 mois)</span>
              </div>
              <p className="text-sm text-slate-400 italic mt-1">Intermarché — Contrat prévu</p>
              <p className="text-sm text-slate-300 mt-2">
                Poste axé sur l'autonomie, l'organisation matinale et la rigueur de gestion des stocks.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}