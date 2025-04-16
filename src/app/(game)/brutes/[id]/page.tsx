'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface Brute {
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
  items?: {
    id: string;
    itemId: string;
    equipped: boolean;
    item: {
      id: string;
      name: string;
      description: string;
      rarity: string;
      strengthBonus: number;
      agilityBonus: number;
      speedBonus: number;
      healthBonus: number;
      intelligenceBonus: number;
    }
  }[];
}

interface Combat {
  id: string;
  bruteId: string;
  opponentId: string;
  winnerId: string | null;
  createdAt: string;
  brute: {
    name: string;
    level: number;
  };
  opponent: {
    name: string;
    level: number;
  };
}

export default function BruteDetailPage() {
  const router = useRouter();
  const params = useParams();
  const bruteId = params.id as string;
  
  const [brute, setBrute] = useState<Brute | null>(null);
  const [combats, setCombats] = useState<Combat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCombats, setIsLoadingCombats] = useState(true);
  const [error, setError] = useState('');
  const [combatsError, setCombatsError] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
        fetchBrute(bruteId);
        fetchCombats(bruteId);
      } catch (err) {
        console.error('Erreur lors du parsing des données utilisateur:', err);
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, [bruteId, router]);

  const fetchBrute = async (id: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/brutes/${id}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setBrute(data);
      console.log('Brute chargée:', data);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la récupération de la brute');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCombats = async (id: string) => {
    setIsLoadingCombats(true);
    setCombatsError('');
    
    try {
      const response = await fetch(`/api/combats?bruteId=${id}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setCombats(data);
      console.log('Combats chargés:', data);
    } catch (err: any) {
      setCombatsError(err.message || 'Une erreur est survenue lors de la récupération des combats');
    } finally {
      setIsLoadingCombats(false);
    }
  };

  const refreshBrute = () => {
    if (bruteId) {
      fetchBrute(bruteId);
      fetchCombats(bruteId);
    }
  };

  // Calcul des points d'expérience requis pour le niveau suivant
  const calculateExpForNextLevel = (level: number) => {
    return level * 100;
  };

  // Calcul du pourcentage d'expérience pour la barre de progression
  const calculateExpPercentage = (exp: number, level: number) => {
    const expForNextLevel = calculateExpForNextLevel(level);
    return Math.min(100, Math.floor((exp / expForNextLevel) * 100));
  };

  // Fonction pour rendre la couleur en fonction de la rareté
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-300';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-orange-400';
      default: return 'text-gray-300';
    }
  };

  // Fonction pour traduire la rareté en français
  const translateRarity = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'Commun';
      case 'uncommon': return 'Peu commun';
      case 'rare': return 'Rare';
      case 'epic': return 'Épique';
      case 'legendary': return 'Légendaire';
      default: return 'Inconnu';
    }
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric', 
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto mb-4 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
          <p className="text-white">Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-md bg-red-500/20 p-6 text-center">
            <h1 className="text-xl font-bold text-red-400 mb-2">Erreur</h1>
            <p className="text-white">{error}</p>
            <button 
              onClick={refreshBrute}
              className="mt-4 rounded-md bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!brute) {
    return (
      <div className="p-4 md:p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-md bg-white/10 p-6 text-center">
            <h1 className="text-xl font-bold text-white mb-2">Brute non trouvée</h1>
            <p className="text-zinc-300">Impossible de trouver cette brute.</p>
            <Link 
              href="/brutes"
              className="mt-4 inline-block rounded-md bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              Retour à mes brutes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/brutes"
              className="inline-flex items-center mb-2 text-sm text-zinc-400 hover:text-white"
            >
              <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Retour à mes brutes
            </Link>
            <h1 className="text-3xl font-bold text-white">{brute.name}</h1>
          </div>
          
          <div className="mt-2 md:mt-0 flex space-x-2">
            <button
              onClick={refreshBrute}
              className="rounded-md bg-purple-900 px-3 py-1 text-sm font-medium text-white hover:bg-purple-800"
            >
              Actualiser
            </button>
            <Link
              href={`/combat?bruteId=${brute.id}`}
              className="rounded-md bg-purple-700 px-3 py-1 text-sm font-medium text-white hover:bg-purple-600"
            >
              Combattre
            </Link>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Carte principale avec stats */}
          <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Statistiques</h2>
              <div className="rounded-full bg-purple-900 px-2 py-1 text-xs font-medium text-white">
                Niveau {brute.level}
              </div>
            </div>
            
            {/* Barre d'expérience */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-zinc-400 mb-1">
                <span>Expérience</span>
                <span>{brute.experience}/{calculateExpForNextLevel(brute.level)}</span>
              </div>
              <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-600" 
                  style={{width: `${calculateExpPercentage(brute.experience, brute.level)}%`}}
                ></div>
              </div>
            </div>
            
            {/* Statistiques principales */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <div className="mb-1 flex items-center text-sm">
                  <span className="text-red-400">Force</span>
                  <span className="ml-auto">{brute.strength}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-red-500" style={{ width: `${(brute.strength / 30) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center text-sm">
                  <span className="text-green-400">Agilité</span>
                  <span className="ml-auto">{brute.agility}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-green-500" style={{ width: `${(brute.agility / 30) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center text-sm">
                  <span className="text-blue-400">Vitesse</span>
                  <span className="ml-auto">{brute.speed}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${(brute.speed / 30) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center text-sm">
                  <span className="text-yellow-400">Santé</span>
                  <span className="ml-auto">{brute.health}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-yellow-500" style={{ width: `${(brute.health / 30) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center text-sm">
                  <span className="text-purple-400">Intelligence</span>
                  <span className="ml-auto">{brute.intelligence}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-purple-500" style={{ width: `${(brute.intelligence / 30) * 100}%` }}></div>
                </div>
              </div>
            </div>
            
            {/* Record de combats */}
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <p className="text-sm text-zinc-400">Victoires</p>
                <p className="text-xl font-medium text-green-400">{brute.victories}</p>
              </div>
              <div className="mx-4 h-8 border-r border-zinc-700"></div>
              <div className="flex-1 text-center">
                <p className="text-sm text-zinc-400">Défaites</p>
                <p className="text-xl font-medium text-red-400">{brute.defeats}</p>
              </div>
              <div className="mx-4 h-8 border-r border-zinc-700"></div>
              <div className="flex-1 text-center">
                <p className="text-sm text-zinc-400">Ratio V/D</p>
                <p className="text-xl font-medium text-white">
                  {brute.defeats > 0 ? (brute.victories / brute.defeats).toFixed(2) : brute.victories > 0 ? '∞' : '0'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Équipement */}
          <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6">Équipement</h2>
            
            {brute.items && brute.items.length > 0 ? (
              <div className="space-y-4">
                {brute.items.map((itemData) => (
                  <div key={itemData.id} className="rounded-md bg-black/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">{itemData.item.name}</h3>
                      <span className={`text-xs ${getRarityColor(itemData.item.rarity)}`}>
                        {translateRarity(itemData.item.rarity)}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">{itemData.item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                      {itemData.item.strengthBonus > 0 && (
                        <div className="flex items-center">
                          <span className="text-red-400 mr-1">+{itemData.item.strengthBonus}</span> Force
                        </div>
                      )}
                      {itemData.item.agilityBonus > 0 && (
                        <div className="flex items-center">
                          <span className="text-green-400 mr-1">+{itemData.item.agilityBonus}</span> Agilité
                        </div>
                      )}
                      {itemData.item.speedBonus > 0 && (
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-1">+{itemData.item.speedBonus}</span> Vitesse
                        </div>
                      )}
                      {itemData.item.healthBonus > 0 && (
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">+{itemData.item.healthBonus}</span> Santé
                        </div>
                      )}
                      {itemData.item.intelligenceBonus > 0 && (
                        <div className="flex items-center">
                          <span className="text-purple-400 mr-1">+{itemData.item.intelligenceBonus}</span> Intelligence
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3 text-right">
                      {itemData.equipped ? (
                        <span className="inline-block rounded bg-green-900/50 px-2 py-1 text-xs text-green-400">
                          Équipé
                        </span>
                      ) : (
                        <button className="inline-block rounded bg-purple-900/50 px-2 py-1 text-xs text-white hover:bg-purple-800/50">
                          Équiper
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md bg-black/20 p-6 text-center">
                <p className="text-zinc-400">Aucun équipement disponible</p>
                <p className="mt-2 text-sm text-zinc-500">Combattez pour gagner de l'équipement!</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Historique des combats */}
        <div className="mt-6 rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Historique des combats</h2>
            <Link
              href={`/combat?bruteId=${brute.id}`}
              className="rounded-md bg-purple-700 px-3 py-1 text-sm font-medium text-white hover:bg-purple-600"
            >
              Nouveau combat
            </Link>
          </div>
          
          {isLoadingCombats ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent"></div>
            </div>
          ) : combatsError ? (
            <div className="rounded-md bg-red-500/20 p-4 text-center">
              <p className="text-red-400">{combatsError}</p>
              <button 
                onClick={() => fetchCombats(bruteId)}
                className="mt-2 text-sm text-purple-400 hover:text-purple-300"
              >
                Réessayer
              </button>
            </div>
          ) : combats.length > 0 ? (
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {combats.map((combat) => {
                const isBrutePlayer = combat.bruteId === bruteId;
                const playerName = isBrutePlayer ? combat.brute.name : combat.opponent.name;
                const opponentName = isBrutePlayer ? combat.opponent.name : combat.brute.name;
                const isVictory = combat.winnerId === bruteId;
                const isDefeat = combat.winnerId && combat.winnerId !== bruteId;
                const isDraw = !combat.winnerId;
                
                return (
                  <div key={combat.id} className="rounded-md bg-black/20 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-medium text-white">{playerName}</span>
                        <span className="mx-2 text-zinc-500">vs</span>
                        <span className="font-medium text-white">{opponentName}</span>
                      </div>
                      <div className={`mt-2 sm:mt-0 px-2 py-1 rounded-full text-xs font-medium ${
                        isVictory ? 'bg-green-900/30 text-green-400' : 
                        isDefeat ? 'bg-red-900/30 text-red-400' : 
                        'bg-yellow-900/30 text-yellow-400'
                      }`}>
                        {isVictory ? 'Victoire' : isDefeat ? 'Défaite' : 'Match nul'}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 mt-1">
                      <span>Niveau {isBrutePlayer ? combat.brute.level : combat.opponent.level} vs Niveau {isBrutePlayer ? combat.opponent.level : combat.brute.level}</span>
                      <span>{formatDate(combat.createdAt)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-md bg-black/20 p-6 text-center">
              <p className="text-zinc-400">Aucun combat dans l'historique</p>
              <p className="mt-2 text-sm text-zinc-500">Commencez à combattre pour remplir votre historique!</p>
              <Link
                href={`/combat?bruteId=${brute.id}`}
                className="mt-4 inline-block rounded-md bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                Commencer un nouveau combat
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 