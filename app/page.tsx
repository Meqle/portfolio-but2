import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-900 text-white flex flex-col items-center justify-center px-4 text-center">
      
      {/* Conteneur Principal */}
      <div className="max-w-3xl mx-auto space-y-8 my-auto animate-fade-in">
        
        {/* En-tête de présentation */}
        <div className="space-y-3">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-800/30">
            Portfolio Universitaire
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pt-2">
            Côme
          </h1>
          <p className="text-xl md:text-2xl font-medium text-cyan-400">
            Développeur Web & Full-Stack
          </p>
        </div>

        {/* Description Courte & Posture Professionnelle */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Étudiant en <strong className="text-slate-200 font-semibold">BUT 2 Informatique</strong> à l'IUT d'Amiens (Parcours RACA). 
          Passionné par la conception d'applications robustes, la rigueur du <em>clean code</em> et le développement d'interfaces modernes et soignées.
        </p>

        {/* Boutons d'action (Remplissent le vide et engagent le visiteur) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link 
            href="/projets" 
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
          >
            Découvrir mes projets
          </Link>
          <Link 
            href="/about" 
            className="bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-800 transition-all"
          >
            En savoir plus sur moi
          </Link>
        </div>

        {/* Aperçu des compétences clés (Apporte du relief technique en bas de page) */}
        <div className="pt-12 border-t border-slate-800/60 max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
            Technologies de prédilection
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 text-xs text-slate-400">
            <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Next.js</span>
            <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Tailwind CSS</span>
            <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">PHP / SQL</span>
            <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">TypeScript</span>
            <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Git / GitHub</span>
          </div>
        </div>

      </div>
    </main>
  )
}