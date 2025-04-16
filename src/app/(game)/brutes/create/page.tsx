'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { generateRandomStats } from '@/lib/utils';

export default function CreateBrutePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState('');
  // Simuler des statistiques aléatoires pour la démonstration
  const [baseStats, setBaseStats] = useState(generateRandomStats(15));

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
      } catch (err) {
        console.error('Erreur lors du parsing des données utilisateur:', err);
        router.push('/login');
      }
    } else {
      // Rediriger vers la page de connexion si non connecté
      router.push('/login');
    }
  }, [router]);

  const regenerateStats = () => {
    setBaseStats(generateRandomStats(15));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Veuillez entrer un nom pour votre brute');
      return;
    }
    
    if (!userId) {
      setError('Utilisateur non connecté');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/brutes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          name
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      // Redirection vers la page des brutes
      router.push('/brutes');
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la création de la brute');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-2">
          <Link className="text-white hover:underline" href="/brutes">
            <svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-white">Créer une nouvelle brute</h1>
        </div>
        
        {error && (
          <div className="mb-6 rounded-md bg-red-500/20 p-4 text-sm text-red-200">
            {error}
          </div>
        )}
        
        <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-white" htmlFor="name">
                Nom de votre brute
              </label>
              <input
                className="w-full rounded-md border border-zinc-700 bg-black/20 px-4 py-2 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none"
                id="name"
                placeholder="Entrez un nom pour votre brute"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">Statistiques de base</h2>
              <p className="mb-4 text-sm text-zinc-300">
                Votre brute commence avec ces statistiques aléatoires. Vous pourrez les améliorer en gagnant des niveaux.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Force</label>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-bold text-white">{baseStats.strength}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      style={{ width: `${(baseStats.strength / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Augmente les dégâts en combat</p>
                </div>
                
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Agilité</label>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-bold text-white">{baseStats.agility}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600"
                      style={{ width: `${(baseStats.agility / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Améliore l'esquive et la précision</p>
                </div>
                
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Vitesse</label>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-bold text-white">{baseStats.speed}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${(baseStats.speed / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Détermine l'ordre d'attaque</p>
                </div>
                
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Santé</label>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-bold text-white">{baseStats.health}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                      style={{ width: `${(baseStats.health / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Augmente les points de vie</p>
                </div>
                
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Intelligence</label>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-bold text-white">{baseStats.intelligence}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                      style={{ width: `${(baseStats.intelligence / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Améliore l'utilisation des objets</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="rounded-md bg-zinc-700 px-4 py-2 text-white transition-colors hover:bg-zinc-600"
                type="button"
                onClick={regenerateStats}
                disabled={isLoading}
              >
                Relancer les stats
              </button>
              <button
                className="rounded-md bg-purple-700 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-600"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Création...' : 'Créer ma brute'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 