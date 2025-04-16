'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Brute {
  id: string;
  name: string;
  level: number;
  victories: number;
  defeats: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [brutes, setBrutes] = useState<Brute[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && userId) {
        fetchBrutes(userId);
        setLastUpdate(Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId]);

  useEffect(() => {
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
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    if (!userId) return;
    
    const refreshInterval = setInterval(() => {
      console.log('Rafraîchissement automatique des données...');
      fetchBrutes(userId);
      setLastUpdate(Date.now());
    }, 30000);
    
    return () => clearInterval(refreshInterval);
  }, [userId]);

  const fetchBrutes = async (userId: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(`/api/brutes?userId=${userId}&_t=${Date.now()}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setBrutes((data.brutes || []).slice(0, 2));
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la récupération des brutes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const handleRefresh = () => {
    if (userId) {
      fetchBrutes(userId);
      setLastUpdate(Date.now());
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-white">Tableau de bord</h1>
          
          <div className="mt-2 md:mt-0 flex space-x-2">
            <button
              onClick={handleRefresh}
              className="rounded-md bg-purple-700 px-3 py-1 text-sm font-medium text-white hover:bg-purple-600"
            >
              Actualiser
            </button>
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-700 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
            >
              Déconnexion
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 rounded-md bg-red-500/20 p-4 text-sm text-red-200">
            {error}
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">Mes Brutes</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-4">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-purple-500 border-t-transparent"></div>
              </div>
            ) : brutes.length > 0 ? (
              <div className="space-y-4">
                {brutes.map((brute) => (
                  <div key={brute.id} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                    <div>
                      <h3 className="font-medium text-white">{brute.name}</h3>
                      <p className="text-sm text-zinc-300">Niveau {brute.level}</p>
                    </div>
                    <div className="text-center text-sm">
                      <p className="text-green-400">{brute.victories} V</p>
                      <p className="text-red-400">{brute.defeats} D</p>
                    </div>
                    <Link
                      className="rounded-md bg-purple-800 px-3 py-1 text-sm text-white hover:bg-purple-700"
                      href={`/brutes/${brute.id}`}
                    >
                      Voir
                    </Link>
                  </div>
                ))}
                
                <Link
                  className="mt-4 inline-block rounded-md bg-purple-800 px-3 py-1 text-sm text-white hover:bg-purple-700"
                  href="/brutes"
                >
                  Voir toutes mes brutes
                </Link>
              </div>
            ) : (
              <div className="rounded-lg bg-white/5 p-4 text-center text-zinc-300">
                <p>Vous n'avez pas encore de brute.</p>
                <Link
                  className="mt-2 inline-block rounded-md bg-purple-800 px-3 py-1 text-sm text-white hover:bg-purple-700"
                  href="/brutes/create"
                >
                  Créer une brute
                </Link>
              </div>
            )}
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">Derniers Combats</h2>
            <div className="rounded-lg bg-white/5 p-4 text-center text-zinc-300">
              <p>Aucun combat récent.</p>
              <Link
                className="mt-2 inline-block rounded-md bg-purple-800 px-3 py-1 text-sm text-white hover:bg-purple-700"
                href="/combat"
              >
                Combattre
              </Link>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">Boutique</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-white/5 p-4 text-zinc-300">
                <h3 className="font-medium text-white">Objets du jour</h3>
                <p className="text-sm">Découvrez les nouveaux objets disponibles dans la boutique.</p>
              </div>
              <Link
                className="inline-block rounded-md bg-purple-800 px-3 py-1 text-sm text-white hover:bg-purple-700"
                href="/shop"
              >
                Visiter la boutique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 