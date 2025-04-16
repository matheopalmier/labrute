import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl/none">
                  LA BRUTE
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  Créez votre personnage, améliorez ses statistiques et affrontez d'autres joueurs dans des combats épiques !
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/register"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-900 shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50"
                >
                  Inscription
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                >
                  Connexion
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-purple-700/20 bg-purple-900/20 p-6 shadow-lg">
                <div className="rounded-full bg-purple-700/20 p-2">
                  <svg className="h-6 w-6 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Statistiques uniques</h3>
                <p className="text-center text-zinc-300">
                  Chaque brute possède des statistiques générées aléatoirement, ce qui rend chaque personnage unique.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-purple-700/20 bg-purple-900/20 p-6 shadow-lg">
                <div className="rounded-full bg-purple-700/20 p-2">
                  <svg className="h-6 w-6 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Combats tactiques</h3>
                <p className="text-center text-zinc-300">
                  Affrontez d'autres joueurs dans des combats au tour par tour où chaque statistique compte.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-purple-700/20 bg-purple-900/20 p-6 shadow-lg">
                <div className="rounded-full bg-purple-700/20 p-2">
                  <svg className="h-6 w-6 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Objets et équipements</h3>
                <p className="text-center text-zinc-300">
                  Collectez des objets rares pour améliorer les statistiques de votre brute et gagner un avantage en combat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full py-6 text-center text-white bg-black/30">
        <p>© 2024 La Brute - Tous droits réservés</p>
      </footer>
    </div>
  );
}
