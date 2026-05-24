import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-900 text-white flex flex-col items-center justify-center px-6 md:px-16">
      
      {/* Conteneur Principal - Ajusté avec max-w-6xl pour donner de l'espace à la grande photo */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 my-auto animate-fade-in w-full">
        
        {/* BLOC GAUCHE : La Photo de Profil (Agrandie) */}
        <div className="flex-shrink-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Halo lumineux cyan ajusté pour la nouvelle taille */}
          <div className="absolute -inset-2 bg-cyan-500 rounded-full blur opacity-25 animate-pulse"></div>
          
          {/* Conteneur arrondi */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-950 shadow-2xl">
            <Image 
              src="/come-photo.jpg"
              alt="Photo de Côme"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* BLOC DROITE : Les textes et boutons */}
        <div className="flex-grow space-y-6 text-center md:text-left max-w-2xl">
          
          <div className="space-y-3">
            <span className="inline-block text-cyan-400 font-semibold tracking-wider text-sm uppercase bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-800/30">
              Portfolio Universitaire
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pt-1">
              Côme
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cyan-400">
              Développeur Web & Full-Stack
            </p>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Étudiant en <strong className="text-slate-200 font-semibold">BUT 2 Informatique</strong> à l'IUT d'Amiens (Parcours RACA). 
            Passionné par la conception d'applications robustes, la rigueur du <em>clean code</em> et le développement d'interfaces modernes et soignées.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link 
              href="/projets" 
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20 text-sm"
            >
              Découvrir mes projets
            </Link>
            <Link 
              href="/about" 
              className="bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-800 transition-all text-sm"
            >
              En savoir plus sur moi
            </Link>
          </div>

          {/* Compétences de prédilection */}
          <div className="pt-8 border-t border-slate-800/60 w-full">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">
              Technologies de prédilection
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs text-slate-400">
              <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Next.js</span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Tailwind CSS</span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">PHP / SQL</span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">TypeScript</span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/60">Git / GitHub</span>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}