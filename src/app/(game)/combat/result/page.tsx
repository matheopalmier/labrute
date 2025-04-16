'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Brute = {
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
  experience?: number;
};

type CombatLog = {
  round: number;
  attacker: string;
  action: string;
  target: string;
  damage?: number;
  effect?: string;
};

export default function CombatResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bruteId = searchParams.get('bruteId');
  const opponentId = searchParams.get('opponentId');
  
  const [loading, setLoading] = useState(true);
  const [playerBrute, setPlayerBrute] = useState<Brute | null>(null);
  const [opponent, setOpponent] = useState<Brute | null>(null);
  const [winner, setWinner] = useState<Brute | null>(null);
  const [allCombatLogs, setAllCombatLogs] = useState<CombatLog[]>([]);
  const [visibleLogs, setVisibleLogs] = useState<CombatLog[]>([]);
  const [expGained, setExpGained] = useState(0);
  const [combatFinished, setCombatFinished] = useState(false);
  const [savingResults, setSavingResults] = useState(false);
  const [resultsSaved, setResultsSaved] = useState(false);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [initialPlayerHealth, setInitialPlayerHealth] = useState(0);
  const [initialOpponentHealth, setInitialOpponentHealth] = useState(0);
  const [currentPlayerHealth, setCurrentPlayerHealth] = useState(0);
  const [currentOpponentHealth, setCurrentOpponentHealth] = useState(0);
  
  useEffect(() => {
    if (!bruteId || !opponentId) {
      router.push('/combat');
      return;
    }
    
    // Charger les données des brutes et simuler un combat
    const loadBrutes = async () => {
      setLoading(true);
      try {
        // En production, vous feriez un appel API pour obtenir les vraies données
        // Mais pour l'exemple, nous les générons ici
        const myBrute = await fetchBrute(bruteId);
        const opponentBrute = await fetchOpponent(opponentId);
        
        if (myBrute && opponentBrute) {
          setPlayerBrute(myBrute);
          setOpponent(opponentBrute);
          
          // Calculer les points de vie initiaux
          const playerHealth = myBrute.health * 5;
          const opponentHealth = opponentBrute.health * 5;
          
          setInitialPlayerHealth(playerHealth);
          setInitialOpponentHealth(opponentHealth);
          setCurrentPlayerHealth(playerHealth);
          setCurrentOpponentHealth(opponentHealth);
          
          // Simuler le combat mais stocker seulement les logs
          const { logs, winner, expGained } = simulateCombat(myBrute, opponentBrute, playerHealth, opponentHealth);
          setAllCombatLogs(logs);
          setWinner(winner);
          setExpGained(expGained);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des brutes:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadBrutes();
  }, [bruteId, opponentId, router]);
  
  // Effet pour animer le déroulement du combat
  useEffect(() => {
    if (allCombatLogs.length === 0 || currentLogIndex >= allCombatLogs.length) return;
    
    // Animation de chaque action de combat avec un délai
    const timer = setTimeout(() => {
      const log = allCombatLogs[currentLogIndex];
      
      // Mettre à jour les points de vie en fonction de l'action
      if (log.damage && log.attacker === playerBrute?.name) {
        setCurrentOpponentHealth(prev => Math.max(0, prev - log.damage!));
      } else if (log.damage && log.attacker === opponent?.name) {
        setCurrentPlayerHealth(prev => Math.max(0, prev - log.damage!));
      }
      
      // Ajouter le log à la liste visible
      setVisibleLogs(prev => [...prev, log]);
      
      // Passer au log suivant
      setCurrentLogIndex(prev => prev + 1);
      
      // Si c'est le dernier log, marquer le combat comme terminé
      if (currentLogIndex === allCombatLogs.length - 1) {
        setCombatFinished(true);
      }
    }, 800); // Délai entre chaque action
    
    return () => clearTimeout(timer);
  }, [allCombatLogs, currentLogIndex, playerBrute, opponent]);
  
  // Effet pour sauvegarder les résultats une fois le combat terminé
  useEffect(() => {
    const saveResults = async () => {
      if (combatFinished && !resultsSaved && !savingResults && playerBrute && opponent) {
        setSavingResults(true);
        try {
          console.log('Envoi des données de combat:', {
            bruteId: playerBrute.id,
            opponentId: opponent.id,
            winnerId: winner?.id,
            expGained
          });
          
          // Appel API pour sauvegarder les résultats du combat et attribuer l'XP
          const response = await fetch('/api/combats', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              bruteId: playerBrute.id,
              opponentId: opponent.id,
              winnerId: winner?.id,
              logs: JSON.stringify(allCombatLogs),
              expGained
            }),
          });
          
          const responseData = await response.json();
          console.log('Réponse API:', responseData);
          
          if (response.ok) {
            setResultsSaved(true);
            
            // Mettre à jour les statistiques locales
            if (playerBrute && winner) {
              if (winner.id === playerBrute.id) {
                // Victoire - Mettre à jour localement
                setPlayerBrute(prev => prev ? {
                  ...prev,
                  victories: prev.victories + 1,
                  experience: (prev.experience || 0) + expGained
                } : null);
              } else if (winner.id === opponent?.id) {
                // Défaite - Mettre à jour localement
                setPlayerBrute(prev => prev ? {
                  ...prev,
                  defeats: prev.defeats + 1,
                  experience: (prev.experience || 0) + expGained
                } : null);
              } else {
                // Match nul - Mettre à jour uniquement l'expérience
                setPlayerBrute(prev => prev ? {
                  ...prev,
                  experience: (prev.experience || 0) + expGained
                } : null);
              }
            }
            
            // Rediriger plus rapidement vers le tableau de bord
            setTimeout(() => {
              router.push('/dashboard');
            }, 2000); // Redirection après 2 secondes
          } else {
            console.error('Erreur lors de la sauvegarde des résultats:', responseData);
          }
        } catch (error) {
          console.error('Erreur lors de la sauvegarde des résultats:', error);
        } finally {
          setSavingResults(false);
        }
      }
    };
    
    saveResults();
  }, [combatFinished, resultsSaved, savingResults, playerBrute, opponent, winner, allCombatLogs, expGained, router]);
  
  const fetchBrute = async (id: string) => {
    try {
      const response = await fetch(`/api/brutes/${id}`);
      if (response.ok) {
        return await response.json();
      } else {
        // Fallback sur des données simulées en cas d'erreur
        return {
          id,
          name: 'Votre Brute',
          level: 3,
          strength: 8,
          agility: 5,
          speed: 6,
          health: 20,
          intelligence: 4,
          victories: 5,
          defeats: 2
        };
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la brute:', error);
      return {
        id,
        name: 'Votre Brute',
        level: 3,
        strength: 8,
        agility: 5,
        speed: 6,
        health: 20,
        intelligence: 4,
        victories: 5,
        defeats: 2
      };
    }
  };
  
  const fetchOpponent = async (id: string) => {
    try {
      const response = await fetch(`/api/brutes/${id}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'adversaire:', error);
    }
    
    // Données génériques de fallback en cas d'erreur
    return {
      id,
      name: `Adversaire #${id.slice(-3)}`,
      level: 1,
      strength: 5,
      agility: 5,
      speed: 5,
      health: 15,
      intelligence: 5,
      victories: 0,
      defeats: 0
    };
  };
  
  const simulateCombat = (player: Brute, enemy: Brute, playerStartHealth: number, enemyStartHealth: number) => {
    let logs: CombatLog[] = [];
    let round = 1;
    
    // Copies des statistiques pour ne pas modifier les originaux
    let playerHealth = playerStartHealth;
    let enemyHealth = enemyStartHealth;
    
    // Déterminer qui commence (basé sur la vitesse)
    let playerFirst = player.speed >= enemy.speed;
    
    // Combat jusqu'à ce qu'un des deux perde
    while (playerHealth > 0 && enemyHealth > 0) {
      if (playerFirst) {
        // Le joueur attaque
        const damage = Math.max(1, Math.floor(Math.random() * player.strength));
        enemyHealth -= damage;
        logs.push({
          round,
          attacker: player.name,
          action: 'attaque',
          target: enemy.name,
          damage
        });
        
        // L'ennemi contre-attaque s'il est encore en vie
        if (enemyHealth > 0) {
          const damage = Math.max(1, Math.floor(Math.random() * enemy.strength));
          playerHealth -= damage;
          logs.push({
            round,
            attacker: enemy.name,
            action: 'contre-attaque',
            target: player.name,
            damage
          });
        }
      } else {
        // L'ennemi attaque
        const damage = Math.max(1, Math.floor(Math.random() * enemy.strength));
        playerHealth -= damage;
        logs.push({
          round,
          attacker: enemy.name,
          action: 'attaque',
          target: player.name,
          damage
        });
        
        // Le joueur contre-attaque s'il est encore en vie
        if (playerHealth > 0) {
          const damage = Math.max(1, Math.floor(Math.random() * player.strength));
          enemyHealth -= damage;
          logs.push({
            round,
            attacker: player.name,
            action: 'contre-attaque',
            target: enemy.name,
            damage
          });
        }
      }
      
      round++;
      // Alterner qui commence pour les rounds suivants
      playerFirst = !playerFirst;
    }
    
    let winner = null;
    let expGained = 0;
    
    // Déterminer le vainqueur
    if (playerHealth <= 0 && enemyHealth <= 0) {
      // Match nul (rare)
      logs.push({
        round,
        attacker: 'Arbitre',
        action: 'déclare',
        target: 'Match nul! Les deux brutes sont tombées en même temps!'
      });
      expGained = 10; // Moins d'XP pour un match nul
    } else if (playerHealth <= 0) {
      // L'ennemi gagne
      logs.push({
        round,
        attacker: enemy.name,
        action: 'remporte',
        target: 'le combat!'
      });
      winner = enemy;
      expGained = 5; // Moins d'XP pour une défaite
    } else {
      // Le joueur gagne
      logs.push({
        round,
        attacker: player.name,
        action: 'remporte',
        target: 'le combat!'
      });
      winner = player;
      expGained = enemy.level * 10; // Plus d'XP pour une victoire
    }
    
    return { logs, winner, expGained };
  };
  
  const skipAnimation = () => {
    // Afficher tous les logs d'un coup et terminer le combat
    setVisibleLogs(allCombatLogs);
    setCurrentLogIndex(allCombatLogs.length);
    setCombatFinished(true);
    
    // Mettre à jour les barres de vie directement au résultat final
    if (winner?.id === playerBrute?.id) {
      setCurrentPlayerHealth(Math.max(1, initialPlayerHealth / 4)); // Laisse un peu de vie
      setCurrentOpponentHealth(0);
    } else if (winner?.id === opponent?.id) {
      setCurrentPlayerHealth(0);
      setCurrentOpponentHealth(Math.max(1, initialOpponentHealth / 4)); // Laisse un peu de vie
    } else {
      // Match nul
      setCurrentPlayerHealth(0);
      setCurrentOpponentHealth(0);
    }
  };
  
  // Calculer le pourcentage de vie restant pour les barres de vie
  const playerHealthPercent = initialPlayerHealth > 0 
    ? Math.max(0, Math.min(100, (currentPlayerHealth / initialPlayerHealth) * 100)) 
    : 0;
  
  const opponentHealthPercent = initialOpponentHealth > 0 
    ? Math.max(0, Math.min(100, (currentOpponentHealth / initialOpponentHealth) * 100)) 
    : 0;
  
  if (loading) {
    return (
      <div className="p-4 md:p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Combat en cours...</h1>
              <div className="animate-pulse flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">Combat</h1>
        </div>
        
        {playerBrute && opponent && (
          <>
            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left w-full md:w-2/5">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-white">{playerBrute.name}</h2>
                    <p className="text-sm text-zinc-400">Niv. {playerBrute.level}</p>
                  </div>
                  <div className="flex h-16 w-16 mx-auto md:mx-0 items-center justify-center rounded-full bg-purple-900 text-3xl mb-2">
                    🤺
                  </div>
                  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300 ease-out"
                      style={{ width: `${playerHealthPercent}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-xs text-zinc-400 mt-1">
                    {Math.ceil(currentPlayerHealth)} / {initialPlayerHealth} PV
                  </p>
                  <div className="mt-2 flex justify-between text-xs text-zinc-400">
                    <span>XP: {playerBrute.experience || 0}/{playerBrute.level * 100}</span>
                    <span>V/D: {playerBrute.victories}/{playerBrute.defeats}</span>
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-white">VS</div>
                
                <div className="text-center md:text-right w-full md:w-2/5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-zinc-400">Niv. {opponent.level}</p>
                    <h2 className="text-xl font-bold text-white">{opponent.name}</h2>
                  </div>
                  <div className="flex h-16 w-16 mx-auto md:mx-0 items-center justify-center rounded-full bg-red-900 text-3xl mb-2 ml-auto">
                    👤
                  </div>
                  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 transition-all duration-300 ease-out"
                      style={{ width: `${opponentHealthPercent}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-xs text-zinc-400 mt-1">
                    {Math.ceil(currentOpponentHealth)} / {initialOpponentHealth} PV
                  </p>
                  <div className="mt-2 flex justify-between text-xs text-zinc-400">
                    <span>V/D: {opponent.victories || 0}/{opponent.defeats || 0}</span>
                  </div>
                </div>
              </div>
              
              {combatFinished && (
                <div className="mt-6 text-center">
                  <div className={`text-2xl font-bold ${winner?.id === playerBrute.id ? 'text-green-400' : winner?.id === opponent.id ? 'text-red-400' : 'text-yellow-400'} mb-2`}>
                    {winner?.id === playerBrute.id ? 'VICTOIRE !' : winner?.id === opponent.id ? 'DÉFAITE !' : 'MATCH NUL !'}
                  </div>
                  <p className="text-zinc-300">
                    {winner?.id === playerBrute.id 
                      ? `Vous avez vaincu ${opponent.name} et gagné ${expGained} points d'expérience !` 
                      : winner?.id === opponent.id 
                        ? `Vous avez été vaincu par ${opponent.name} mais avez gagné ${expGained} points d'expérience !`
                        : `Match nul ! Vous avez gagné ${expGained} points d'expérience !`}
                  </p>
                  {savingResults && (
                    <p className="text-sm text-blue-400 mt-2">Sauvegarde des résultats...</p>
                  )}
                  {resultsSaved && (
                    <div>
                      <p className="text-sm text-green-400 mt-2">Expérience ajoutée à votre brute !</p>
                      <p className="text-xs text-zinc-300 mt-1">
                        {playerBrute.victories} victoires / {playerBrute.defeats} défaites
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Déroulement du combat</h2>
                {!combatFinished && (
                  <button 
                    onClick={skipAnimation} 
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Passer l'animation
                  </button>
                )}
              </div>
              
              <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                {visibleLogs.map((log, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-md transition-opacity duration-300 ease-in ${
                      log.attacker === playerBrute.name 
                        ? 'bg-purple-900/20' 
                        : log.attacker === opponent.name 
                          ? 'bg-red-900/20' 
                          : 'bg-zinc-800/50'
                    } ${index === visibleLogs.length - 1 ? 'animate-pulse' : ''}`}
                  >
                    <p className="text-sm text-zinc-300">
                      <span className="font-bold">{log.attacker}</span> {log.action} {log.target}
                      {log.damage && <span className="text-red-400 ml-1">(-{log.damage} PV)</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Link 
                href="/combat" 
                className="rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
              >
                Retour aux combats
              </Link>
              <Link 
                href="/dashboard" 
                className="rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600"
              >
                Tableau de bord
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 