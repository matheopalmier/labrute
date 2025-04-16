'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

// Définition du type pour éviter d'importer directement de @prisma/client
type Brute = {
  id: string;
  name: string;
  level: number;
  experience: number;
  strength: number;
  agility: number;
  speed: number;
  health: number;
  intelligence: number;
  victories: number;
  defeats: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

function CombatPageContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBruteId = searchParams.get('bruteId');
  
  const [myBrutes, setMyBrutes] = useState<Brute[]>([]);
  const [selectedBrute, setSelectedBrute] = useState<Brute | null>(null);
  const [opponents, setOpponents] = useState<Brute[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Charger les brutes de l'utilisateur seulement si l'utilisateur est authentifié
  useEffect(() => {
    if (status === 'authenticated') {
      fetchMyBrutes();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [status]);
  
  // Charger les adversaires une fois qu'une brute est sélectionnée
  useEffect(() => {
    if (selectedBrute) {
      fetchOpponents();
    }
  }, [selectedBrute]);
  
  // Sélectionner automatiquement la brute si l'ID est fourni dans l'URL
  useEffect(() => {
    if (selectedBruteId && myBrutes.length > 0) {
      const brute = myBrutes.find(b => b.id === selectedBruteId);
      if (brute) {
        setSelectedBrute(brute);
      }
    }
  }, [selectedBruteId, myBrutes]);
  
  const fetchMyBrutes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/brutes/my');
      if (response.ok) {
        const data = await response.json();
        setMyBrutes(data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des brutes:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchOpponents = async () => {
    try {
      // Appel à l'API pour obtenir des adversaires correspondant au niveau de la brute
      const response = await fetch(`/api/brutes/opponents?level=${selectedBrute?.level || 1}`);
      
      if (response.ok) {
        const data = await response.json();
        setOpponents(data);
        console.log('Adversaires chargés:', data);
      } else {
        console.error('Erreur lors du chargement des adversaires:', await response.text());
        // En cas d'erreur, définir un tableau vide
        setOpponents([]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des adversaires:', error);
      // En cas d'erreur, définir un tableau vide
      setOpponents([]);
    }
  };
  
  const handleSelectBrute = (brute: Brute) => {
    setSelectedBrute(brute);
    router.push(`/combat?bruteId=${brute.id}`, { scroll: false });
  };
  
  const handleCombat = async (opponentId: string) => {
    if (!selectedBrute) return;
    
    try {
      router.push(`/combat/result?bruteId=${selectedBrute.id}&opponentId=${opponentId}`);
    } catch (error) {
      console.error('Erreur lors du combat:', error);
    }
  };
  
  // Fonction pour déterminer l'emoji à afficher pour une brute
  const getEmoji = (name: string, userId: string) => {
    // Pour toutes les brutes, on utilise un emoji générique
    return '👤';
  };

  // Fonction pour savoir si une brute appartient à un joueur réel
  const isPlayerBrute = (userId: string) => {
    return true; // Toutes les brutes sont maintenant des brutes de joueurs
  };

  // Rendu du badge pour le type de brute (système ou joueur)
  const renderBruteBadge = (brute: Brute) => {
    return (
      <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400">
        Joueur
      </span>
    );
  };

  // Afficher un écran de connexion si l'utilisateur n'est pas authentifié
  if (status === 'unauthenticated') {
    return (
      <div className="p-4 md:p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">Combat</h1>
            <p className="mt-2 text-zinc-300">Vous devez être connecté pour accéder aux combats</p>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white/10 p-8 shadow backdrop-blur-sm text-center">
            <h2 className="mb-4 text-xl font-bold text-white">Connectez-vous pour combattre</h2>
            <p className="text-zinc-300 mb-6">
              Vous devez vous connecter ou créer un compte pour pouvoir créer des brutes et participer aux combats.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/login" 
                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                Se connecter
              </Link>
              <Link 
                href="/register" 
                className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-md"
              >
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading && myBrutes.length === 0) {
    return (
      <div className="p-4 md:p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-40">
            <p className="text-white">Chargement des brutes...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">Combat</h1>
          <p className="mt-2 text-zinc-300">Choisissez votre brute et affrontez d'autres joueurs</p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">Choisir votre brute</h2>
            
            {myBrutes.length > 0 ? (
              <div className="space-y-3">
                {myBrutes.map((brute) => (
                  <div 
                    key={brute.id} 
                    className={`flex items-center gap-4 rounded-lg ${selectedBrute?.id === brute.id ? 'bg-purple-800/30' : 'bg-white/5'} p-4`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900 text-2xl">
                      {getEmoji(brute.name, brute.userId)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-bold text-white">{brute.name}</h3>
                        <span className="ml-2 text-sm text-zinc-400">Niv. {brute.level}</span>
                      </div>
                      <div className="text-sm text-zinc-300">
                        Victoires: {brute.victories} | Défaites: {brute.defeats}
                      </div>
                    </div>
                    <button
                      className={`rounded-md px-4 py-2 ${
                        selectedBrute?.id === brute.id 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-zinc-700 text-zinc-200 hover:bg-zinc-600'
                      }`}
                      onClick={() => handleSelectBrute(brute)}
                    >
                      {selectedBrute?.id === brute.id ? 'Sélectionnée' : 'Sélectionner'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <p className="text-zinc-300 mb-4">Vous n'avez pas encore de brute.</p>
                <Link 
                  href="/dashboard" 
                  className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                  Créer une brute
                </Link>
              </div>
            )}
          </div>
          
          {selectedBrute && (
            <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-bold text-white">Choisir un adversaire</h2>
              
              {opponents.length > 0 ? (
                <div className="space-y-3">
                  {opponents.map((opponent) => (
                    <div 
                      key={opponent.id} 
                      className="flex items-center gap-4 rounded-lg bg-white/5 p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-900 text-2xl">
                        {getEmoji(opponent.name, opponent.userId)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-bold text-white">{opponent.name}</h3>
                          <span className="ml-2 text-sm text-zinc-400">Niv. {opponent.level}</span>
                          {renderBruteBadge(opponent)}
                        </div>
                        <div className="text-sm text-zinc-300">
                          Victoires: {opponent.victories} | Défaites: {opponent.defeats}
                        </div>
                      </div>
                      <button
                        className="rounded-md bg-red-700 px-4 py-2 text-white hover:bg-red-600"
                        onClick={() => handleCombat(opponent.id)}
                      >
                        Combattre
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center">
                  <p className="text-zinc-300">Aucun adversaire disponible pour le moment. Réessayez plus tard.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CombatPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Chargement de la page de combat...</div>}>
      <CombatPageContent />
    </Suspense>
  );
} 