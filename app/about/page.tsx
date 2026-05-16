export default function About() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-12">
        
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">À propos de moi</h2>
          <p className="text-slate-400 mt-2">Découvrez mon profil, mes valeurs et ce qui m'anime au quotidien.</p>
        </section>

        {/* Section Pro & Académique */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200">Mon Parcours & Mes Valeurs</h3>
          <p className="text-slate-300 leading-relaxed">
            Mon intérêt pour l'informatique a débuté dès le lycée à travers les spécialités Mathématiques et NSI. 
            Après une première expérience enrichissante de 6 mois en école préparatoire intégrée à l'EPITA, 
            j'ai choisi de m'orienter vers le BUT Informatique (parcours Réalisation d'Applications). Ce choix m'a permis 
            d'allier une solide base théorique à la pratique concrète du développement.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Dans mon travail, j'accorde une grande importance à la <span className="text-cyan-400 font-semibold">rigueur</span>, la <span className="text-cyan-400 font-semibold">curiosité</span> et l'<span className="text-cyan-400 font-semibold">esprit d'équipe</span>. 
            J'aime aller au bout des choses et livrer des projets pleinement fonctionnels.
          </p>
        </section>

        {/* Section Équilibre : Faiblesse attachante vs Qualités */}
        <section className="bg-slate-950 p-6 rounded-xl border border-slate-800 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-emerald-400 font-semibold mb-2">Mes forces</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
              <li>Grande autonomie face aux problèmes techniques</li>
              <li>Capacité d'adaptation (expériences variées : restauration, stage)</li>
              <li>Déterminé à trouver des solutions optimales</li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 font-semibold mb-2">Mon "Bug" de fabrication</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Je souffre d'une légère obsession pour le <span className="italic text-slate-200">clean code</span> et l'organisation des dossiers. Si une fonction 
              n'est pas parfaitement indentée ou qu'une base de données manque de clarté, j'ai du mal à m'arrêter. C'est idéal 
              pour rendre des projets impeccables, un peu moins pour mon temps de sommeil !
            </p>
          </div>
        </section>

        {/* Section Passions et Intérêts */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200">Mes Passions & Intérêts</h3>
          <p className="text-slate-300 leading-relaxed">
            En dehors des lignes de code, je nourris un vif intérêt pour l'univers du <span className="text-cyan-400 font-semibold">streaming</span> et des <span className="text-cyan-400 font-semibold">jeux vidéo</span>, qui 
            représentent pour moi de formidables vecteurs de divertissement et d'innovation technique. 
            Je suis également un grand passionné de <span className="text-cyan-400 font-semibold">musique</span> — bien que je n'en pratique pas moi-même, elle m'accompagne 
            et rythme chacune de mes sessions de programmation.
          </p>
        </section>

      </div>
    </main>
  );
}