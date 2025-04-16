'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Brute {
  id: string;
  name: string;
  level: number;
  strength: number;
  agility: number;
  speed: number;
  health: number;
  intelligence: number;
  victories: number;
  defeats: number;
}

export default function BrutesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [brutes, setBrutes] = useState<Brute[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // Ajouter un écouteur pour les événements de visibilité de page
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && userId) {
        // Rafraîchir les données quand l'utilisateur revient sur la page
        fetchBrutes(userId);
        setLastUpdate(Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Nettoyer l'écouteur
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId]);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
        fetchBrutes(parsedUser.id);
      } catch (err) {
        console.error('Erreur lors du parsing des données utilisateur:', err);
        router.push('/login');
      }
    } else {
      // Rediriger vers la page de connexion si non connecté
      router.push('/login');
    }
  }, [router]);

  const fetchBrutes = async (userId: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Ajouter un paramètre timestamp pour éviter la mise en cache
      const response = await fetch(`/api/brutes?userId=${userId}&_t=${Date.now()}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setBrutes(data.brutes || []);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la récupération des brutes');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBrute = async (bruteId: string) => {
    if (!userId) return;
    
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette brute ?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/brutes/${bruteId}?userId=${userId}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      // Mettre à jour la liste des brutes
      fetchBrutes(userId);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la suppression de la brute');
    }
  };

  // Fonction pour rafraîchir manuellement les données
  const handleRefresh = () => {
    if (userId) {
      fetchBrutes(userId);
      setLastUpdate(Date.now());
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-white">Mes Brutes</h1>
          <div className="mt-2 md:mt-0 flex space-x-2">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center rounded-md bg-purple-900 px-3 py-2 text-sm font-medium text-white hover:bg-purple-800"
            >
              <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              Actualiser
            </button>
            <Link
              href="/brutes/create"
              className="inline-flex items-center rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Créer une brute
            </Link>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 rounded-md bg-red-500/20 p-4 text-sm text-red-200">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
          </div>
        ) : brutes.length === 0 ? (
          <div className="rounded-lg bg-white/10 p-12 text-center shadow backdrop-blur-sm">
            <h2 className="mb-2 text-xl font-semibold text-white">Vous n'avez pas encore de brute</h2>
            <p className="mb-6 text-zinc-300">Créez votre première brute pour commencer à combattre !</p>
            <Link
              href="/brutes/create"
              className="inline-flex items-center rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Créer une brute
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brutes.map((brute) => (
              <div key={brute.id} className="overflow-hidden rounded-lg bg-white/10 shadow backdrop-blur-sm">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">{brute.name}</h2>
                    <span className="rounded-full bg-purple-900 px-2 py-1 text-xs font-medium text-white">
                      Niveau {brute.level}
                    </span>
                  </div>
                  
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="mb-1 flex items-center text-sm">
                        <span className="text-red-400">Force</span>
                        <span className="ml-auto">{brute.strength}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-700">
                        <div className="h-full rounded-full bg-red-500" style={{ width: `${(brute.strength / 20) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center text-sm">
                        <span className="text-green-400">Agilité</span>
                        <span className="ml-auto">{brute.agility}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-700">
                        <div className="h-full rounded-full bg-green-500" style={{ width: `${(brute.agility / 20) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center text-sm">
                        <span className="text-blue-400">Vitesse</span>
                        <span className="ml-auto">{brute.speed}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-700">
                        <div className="h-full rounded-full bg-blue-500" style={{ width: `${(brute.speed / 20) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center text-sm">
                        <span className="text-yellow-400">Santé</span>
                        <span className="ml-auto">{brute.health}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-700">
                        <div className="h-full rounded-full bg-yellow-500" style={{ width: `${(brute.health / 20) * 100}%` }}></div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="mb-1 flex items-center text-sm">
                        <span className="text-purple-400">Intelligence</span>
                        <span className="ml-auto">{brute.intelligence}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-700">
                        <div className="h-full rounded-full bg-purple-500" style={{ width: `${(brute.intelligence / 20) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-1 text-center text-sm">
                      <span className="text-green-400">{brute.victories}</span> victoires
                    </div>
                    <div className="mx-2 h-4 border-r border-zinc-700"></div>
                    <div className="flex-1 text-center text-sm">
                      <span className="text-red-400">{brute.defeats}</span> défaites
                    </div>
                  </div>
                </div>
                
                <div className="flex border-t border-zinc-700 bg-black/20">
                  <Link
                    href={`/brutes/${brute.id}`}
                    className="flex-1 py-3 text-center text-sm font-medium text-white hover:bg-zinc-700"
                  >
                    Détails
                  </Link>
                  <Link
                    href={`/combat?bruteId=${brute.id}`}
                    className="flex-1 border-l border-zinc-700 py-3 text-center text-sm font-medium text-white hover:bg-zinc-700"
                  >
                    Combattre
                  </Link>
                  <button
                    onClick={() => deleteBrute(brute.id)}
                    className="flex-1 border-l border-zinc-700 py-3 text-center text-sm font-medium text-red-400 hover:bg-red-900/20"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 