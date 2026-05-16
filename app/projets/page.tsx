import Image from 'next/image'

export default function Projets() {
  return (
    // Remplacement de p-8/p-24 par un padding bas à 0 (pb-0) pour coller parfaitement au footer sans créer de barre noire vide
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 pb-0 md:pb-0 flex flex-col items-center w-full">
      <div className="max-w-5xl w-full space-y-16 mb-16">
        
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">Le Narratif de mes Projets</h2>
          <p className="text-slate-400 mt-2">Découvrez les coulisses de mes réalisations majeures, de la conception à la résolution de problèmes.</p>
        </section>

        {/* PROJET 1 : LE SALON DE TATOUAGE */}
        <article className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-4 border-cyan-500 pl-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-100">Site Web pour "Pink Studio" (Salon de Tatouage)</h3>
              <p className="text-sm text-cyan-400 font-medium">Janvier — Mars 2026 | Projet Solo de BUT 2</p>
            </div>
            <span className="self-start md:self-center bg-slate-950 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-800">
              PHP, SQL, VS Code, WAMP64, CSS3
            </span>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-white">Le Défi :</strong> En arrivant en stage au salon <em>Pink Studio Amiens</em>, ma mission était de concevoir de A à Z un site web complet et dynamique. En tant qu'unique développeur, j'ai pris en charge la totalité de la chaîne : de la modélisation des données relationnelles à l'interface utilisateur, incluant un back-office d'administration sécurisé.
            </p>
            <p>
              <strong className="text-white">L'Approche Rigoureuse :</strong> Ma rigueur a été cruciale dès la conception de la base de données sous SQL. La structure devait garantir la flexibilité entre les artistes, leurs styles et les œuvres. J'ai utilisé <span className="text-cyan-400">VS Code</span> pour orchestrer tout le code backend en <span className="text-cyan-400">PHP</span>, assurant une séparation claire entre les scripts de traitement et l'affichage.
            </p>
            <p>
              <strong className="text-white">La Difficulté Surmontée :</strong> Le plus grand challenge a été l'autonomie totale et l'implémentation du back-office de maintenance. Sans senior pour valider mes choix, j'ai passé du temps à sécuriser les formulaires d'upload d'images et à structurer mes feuilles de style. C’est là que mon attention portée au <em>clean code</em> est devenue un atout.
            </p>
          </div>

          {/* GALERIE DES PREUVES TECHNIQUES */}
          <section className="space-y-12 pt-6">
            
            {/* GRILLE : ESPACE ADMIN & GALERIE PUBLIQUE */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* CARTE 1 : L'ESPACE ADMIN (site-admin.png) */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                    <h4 className="text-sm font-semibold text-slate-200">Preuve 1 : Interface de Maintenance Administrateur</h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center group">
                    <Image 
                      src="/site-admin.png" 
                      alt="Interface d'administration CRUD du site Pink Studio" 
                      width={800} 
                      height={450} 
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50 mt-4">
                  💡 <span className="font-semibold text-slate-300">CRUD Complet :</span> Cette vue montre l'espace sécurisé permettant au gérant d'ajouter de nouveaux tatouages, de lier des styles spécifiques et de gérer la liste des artistes de manière totalement dynamique sans toucher au code.
                </p>
              </div>

              {/* CARTE 2 : LA GALERIE PUBLIQUE (site-galerie.png) */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <h4 className="text-sm font-semibold text-slate-200">Preuve 2 : Rendu de la Galerie Grand Public</h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center group">
                    <Image 
                      src="/site-galerie.png" 
                      alt="Galerie utilisateur avec filtres dynamiques" 
                      width={800} 
                      height={450} 
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50 mt-4">
                  💡 <span className="font-semibold text-slate-300">Affichage Dynamique :</span> Côté utilisateur, les données injectées depuis MySQL sont mises en page sous forme de cartes épurées, intégrant un sytème de filtres par artiste et par style pour fluidifier l'expérience utilisateur.
                </p>
              </div>

            </div>

            {/* CARTE 3 : ARCHITECTURE DE CODE (vscode-architecture.png) */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <h4 className="text-sm font-semibold text-slate-200">Preuve 3 : Architecture du Projet et Rigueur CSS sous VS Code</h4>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group max-h-[400px] flex items-start">
                <Image 
                  src="/vscode-architecture.png" 
                  alt="Architecture des dossiers PHP et structure CSS sous VS Code" 
                  width={1200} 
                  height={600} 
                  className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover object-top w-full"
                />
              </div>
              
              <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50">
                💡 <span className="font-semibold text-slate-300">Note d'architecture :</span> L'arborescence met en évidence une organisation stricte : un dossier dédié aux fichiers de traitement PHP (`includes`), une segmentation claire de l'espace administration (`admin.php`), et l'utilisation de variables CSS globales configurées à la racine pour assurer l'harmonie graphique.
              </p>
            </div>
            
            {/* CARTE 4 : INTERFACE PHPVERSION / SQL AGRANDIE SUR TOUTE LA LARGEUR (phpmyadmin.png) */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                <h4 className="text-sm font-semibold text-slate-200">Preuve Technique 4 : Base de Données Relationnelle Relationnelle (phpMyAdmin)</h4>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group max-h-[300px] flex items-center justify-center p-2">
                <Image 
                  src="/phpmyadmin.png" 
                  alt="Base de données relationnelle sous phpMyAdmin" 
                  width={1200} 
                  height={400} 
                  className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full"
                />
              </div>
              
              <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50">
                💡 <span className="font-semibold text-slate-300">Structure Backend :</span> Modélisation de la base de données relationnelle `pink_studio_amiens`. Cette interface confirme l'organisation des tables entités (`artistes`, `tatouages`, `utilisateurs`) et de la table associative pivot (`tatouage_styles`), indispensables au bon fonctionnement des filtres dynamiques de la galerie.
              </p>
            </div>

          </section>
        </article>

        {/* PROJET 2 : L'ENTREPRISE AUTOMOBILE */}
        <article className="space-y-6 pt-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-4 border-amber-500 pl-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-100">Plateforme pour une Entreprise Automobile</h3>
              <p className="text-sm text-amber-400 font-medium">Prestation Freelance en cours | Binôme RACA</p>
            </div>
            <span className="self-start md:self-center bg-slate-950 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-800">
              Techs : Stack Web Moderne
            </span>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-white">Le Contexte :</strong> Suite à mon expérience de stage concluante, un collègue de BUT et moi-même avons été sollicités pour réaliser l'intégralité de la plateforme d'une entreprise du secteur automobile. Il s'agit de notre première véritable prestation de service rémunérée.
            </p>
            <p>
              <strong className="text-white">L'Esprit d'Équipe & Agilité :</strong> Évoluer en binôme sur une stack moderne implique d'adopter une posture professionnelle rigoureuse. Nous exploitons intensément l'outil Git pour l'intégration de nos codes respectifs et organisons des revues régulières pour assurer le respect des exigences métiers du client.
            </p>
          </div>
        </article>

      </div>
    </main>
  );
}