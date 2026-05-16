export default function Reflexion() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-16">
        
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">Réflexion & Prise de Recul</h2>
          <p className="text-slate-400 mt-2">
            Auto-évaluation de mon parcours, de mes compétences et de ma progression vers la posture de développeur.
          </p>
        </section>

        {/* SECTION 1 : L'ÉVOLUTION DE MA POSTURE (BUT 1 VS BUT 2) */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
            <span>📈</span> Évolution de ma Posture Professionnelle
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {/* Le BUT 1 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">BUT 1 — L'Apprentissage Guidé</span>
              <h4 className="text-lg font-bold text-slate-300 mt-1 mb-3">Exécution et Assimilation</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Durant ma première année à l'IUT d'Amiens, mon travail consistait principalement à assimiler les concepts fondamentaux : l'algorithmique en C/C++, la découverte de la programmation web orientée objet et la rigueur des requêtes SQL relationnelles. Les projets étaient fortement encadrés, avec des structures de code pré-établies.
              </p>
            </div>

            {/* Le BUT 2 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-cyan-900/40 shadow-lg shadow-cyan-950/20">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">BUT 2 — L'Autonomie et Parcours RACA</span>
              <h4 className="text-lg font-bold text-slate-200 mt-1 mb-3">Conception, Choix et Responsabilités</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Le BUT 2 a marqué ma transition vers une posture de concepteur autonome. Lors de mon stage pour le projet <em>Pink Studio</em>, j'ai dû assumer seul l'intégralité du cycle de développement : de l'analyse du besoin client à la modélisation UML/SQL, jusqu'à l'écriture d'un backend dynamique en PHP sécurisé. Je ne me contente plus d'écrire du code qui fonctionne, je conçois des architectures maintenables.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 : SYNTHÈSE DES COMPÉTENCES DU PARCOURS RACA */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
            <span>🛠️</span> Alignement avec le Référentiel National (RACA)
          </h3>
          
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Le parcours <strong>Réalisation d'Applications : Conception, Développement, Validation</strong> impose des exigences strictes en matière de qualité logicielle. Voici comment mes réalisations concrétisent ces apprentissages critiques :
          </p>

          <div className="space-y-4">
            {/* Compétence 1 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">Compétence 1 — Développement Qualitatif</span>
                <h4 className="text-base font-bold text-slate-200">Implémentation d'architectures dynamiques et sécurisées</h4>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Traduit par la mise en place d'un espace d'administration complet (CRUD) en PHP natif pour le salon de tatouage, incluant la validation stricte des données et la gestion sécurisée des téléversements de fichiers.
                </p>
              </div>
              <span className="bg-cyan-950/40 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded border border-cyan-800/30 self-start md:self-center">
                Validé (Stage)
              </span>
            </div>

            {/* Compétence 2 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">Compétence 2 — Conception et Optimisation</span>
                <h4 className="text-base font-bold text-slate-200">Modélisation de données et gestion d'environnements</h4>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Création de bases de données relationnelles optimisées sous MySQL, intégrant des tables associatives pour lier dynamiquement les œuvres, les styles et les artistes sans redondance d'information.
                </p>
              </div>
              <span className="bg-cyan-950/40 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded border border-cyan-800/30 self-start md:self-center">
                Validé (Projet Solo)
              </span>
            </div>

            {/* Compétence 3 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">Compétence 3 — Collaboration Technique</span>
                <h4 className="text-base font-bold text-slate-200">Travail en équipe agile et gestion des versions</h4>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Développement en binôme de la plateforme automobile en mode freelance. Utilisation intensive de Git (branches, fusions, résolution de conflits) et répartition méthodique du travail selon un cahier des charges client réel.
                </p>
              </div>
              <span className="bg-amber-950/40 text-amber-400 text-xs font-medium px-2.5 py-1 rounded border border-amber-800/30 self-start md:self-center">
                En cours (Freelance)
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 3 : MA PHILOSOPHIE DU CODE & PERSPECTIVES */}
        <section className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>🎯</span> Bilan et Perspectives d'Avenir
          </h3>
          
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Mon parcours en BUT Informatique m'a permis d'ancrer une valeur fondamentale dans ma pratique quotidienne : <strong>le souci du détail</strong>. Comme évoqué dans ma présentation, mon exigence quant à la propreté du code et l'organisation rigoureuse des arborescences de fichiers est passée d'un simple automatisme à un véritable atout professionnel. Un code propre est un code qui dure, qui se maintient facilement et qui s'intègre sans friction au sein d'une équipe.
            </p>
            <p>
              Fort de mes expériences en développement natif (PHP, C, SQL), j'ai également compris l'importance de m'ouvrir aux écosystèmes modernes. Mon appropriation de frameworks comme <strong>Next.js</strong> et de bibliothèques utilitaires comme <strong>Tailwind CSS</strong> pour concevoir ce portfolio témoigne de ma flexibilité technologique.
            </p>
            <p>
              <strong>Pour la suite :</strong> À court terme, mon objectif est de consolider ma spécialisation RACA lors de ma troisième année de BUT, idéalement en alternance. À plus long terme, j'envisage une poursuite d'études vers un Master ou un titre d'ingénieur afin d'approfondir la conception d'architectures logicielles complexes, avec une forte ambition de travailler, à terme, dans des contextes internationaux ou en totale autonomie freelance.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}