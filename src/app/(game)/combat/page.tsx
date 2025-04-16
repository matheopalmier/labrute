'use client';

import { useEffect, useState } from 'react';
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

export default function CombatPage() {
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
                    <div>
                      <h3 className="font-medium text-white">{brute.name}</h3>
                      <p className="text-sm text-zinc-400">Niveau {brute.level}</p>
                    </div>
                    <button 
                      onClick={() => handleSelectBrute(brute)}
                      className={`ml-auto rounded-md ${selectedBrute?.id === brute.id ? 'bg-purple-500' : 'bg-purple-700'} px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-purple-600`}
                    >
                      {selectedBrute?.id === brute.id ? 'Sélectionnée' : 'Sélectionner'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-4">
                <p className="text-zinc-300 mb-3">Vous n'avez pas encore de brute.</p>
                <button 
                  onClick={() => router.push('/brutes')}
                  className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                  Créer une brute
                </button>
              </div>
            )}
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">Adversaires disponibles</h2>
            
            <div className="space-y-3">
              {opponents.map((opponent) => (
                <div key={opponent.id} className="flex items-center gap-4 rounded-lg bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-900 text-2xl">
                    {getEmoji(opponent.name, opponent.userId)}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{opponent.name}</h3>
                    <div className="flex gap-2 text-xs">
                      <span className="text-zinc-400">Niveau {opponent.level}</span>
                      <span className="text-green-400">{opponent.victories || 0} V</span>
                      <span className="text-red-400">{opponent.defeats || 0} D</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCombat(opponent.id)}
                    disabled={!selectedBrute}
                    className={`ml-auto rounded-md ${!selectedBrute ? 'cursor-not-allowed bg-zinc-700 opacity-50' : 'bg-red-700 hover:bg-red-600'} px-3 py-1 text-sm font-medium text-white`}
                  >
                    Combattre
                  </button>
                </div>
              ))}
            </div>
            
            {!selectedBrute && (
              <p className="mt-4 text-center text-sm text-zinc-400">
                Sélectionnez d'abord une de vos brutes pour combattre
              </p>
            )}
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-bold text-white">Comment fonctionnent les combats ?</h2>
          
          <div className="space-y-3 text-zinc-300">
            <p>
              Les combats sont automatiques et se déroulent au tour par tour. Les statistiques de votre brute déterminent ses chances de gagner.
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li><span className="text-red-400">Force</span> : augmente les dégâts infligés</li>
              <li><span className="text-green-400">Agilité</span> : améliore les chances d'esquiver et de toucher</li>
              <li><span className="text-blue-400">Vitesse</span> : détermine l'ordre des attaques</li>
              <li><span className="text-yellow-400">Santé</span> : augmente les points de vie</li>
              <li><span className="text-purple-400">Intelligence</span> : améliore l'utilisation des objets</li>
            </ul>
            <p>
              Chaque combat vous rapporte de l'expérience, que vous gagniez ou perdiez. Gagnez des niveaux pour améliorer vos statistiques !
            </p>
          </div>
        </div>

        {/* Choix de l'adversaire */}
        {selectedBrute && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Choisissez un adversaire</h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {opponents.map((opponent) => (
                <div 
                  key={opponent.id} 
                  className="rounded-lg bg-white/10 p-4 shadow backdrop-blur-sm transition-all hover:bg-white/15 cursor-pointer"
                  onClick={() => handleCombat(opponent.id)}
                >
                  <div className="mb-3 flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900 text-2xl">
                      {getEmoji(opponent.name, opponent.userId)}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-white flex items-center">
                        {opponent.name}
                        {renderBruteBadge(opponent)}
                      </h3>
                      <p className="text-sm text-zinc-400">Niveau {opponent.level}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-xs text-zinc-400 mb-2">
                    <span className="flex-1">
                      <span className="text-green-400">{opponent.victories}</span> V
                    </span>
                    <span className="flex-1 text-center">/</span>
                    <span className="flex-1 text-right">
                      <span className="text-red-400">{opponent.defeats}</span> D
                    </span>
                  </div>
                  
                  <div className="rounded bg-purple-900/20 p-2 text-xs text-zinc-300">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <span className="text-red-400 mr-1">FOR</span> {opponent.strength}
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-1">AGI</span> {opponent.agility}
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-400 mr-1">VIT</span> {opponent.speed}
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">SAN</span> {opponent.health}
                      </div>
                      <div className="col-span-2 flex items-center">
                        <span className="text-purple-400 mr-1">INT</span> {opponent.intelligence}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-3 w-full rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600 active:translate-y-0.5"
                  >
                    Combattre
                  </button>
                </div>
              ))}
              
              {opponents.length === 0 && !loading && (
                <div className="col-span-full rounded-lg bg-white/10 p-6 text-center shadow backdrop-blur-sm">
                  <p className="text-zinc-300">Aucun adversaire disponible pour le moment.</p>
                  <p className="mt-2 text-sm text-zinc-400">Revenez plus tard pour trouver des adversaires.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 