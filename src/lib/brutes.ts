import { prisma } from './prisma';
import { generateRandomStats } from './utils';

export async function getBrutesByUserId(userId: string) {
  return prisma.brute.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getBruteById(id: string) {
  return prisma.brute.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          item: true,
        },
      },
    },
  });
}

export async function createBrute(userId: string, name: string) {
  // Générer des statistiques aléatoires
  const stats = generateRandomStats(20);
  
  return prisma.brute.create({
    data: {
      name,
      userId,
      strength: stats.strength,
      agility: stats.agility,
      speed: stats.speed,
      health: stats.health,
      intelligence: stats.intelligence,
    },
  });
}

export async function deleteBrute(id: string, userId: string) {
  // Vérifier que la brute appartient bien à l'utilisateur
  const brute = await prisma.brute.findFirst({
    where: {
      id,
      userId,
    },
  });
  
  if (!brute) {
    throw new Error('Brute non trouvée ou non autorisée');
  }
  
  return prisma.brute.delete({
    where: { id },
  });
}

export async function addExperience(bruteId: string, amount: number) {
  const brute = await prisma.brute.findUnique({
    where: { id: bruteId },
  });
  
  if (!brute) {
    throw new Error('Brute non trouvée');
  }
  
  // Calcul de l'expérience et niveau
  let newExperience = brute.experience + amount;
  let newLevel = brute.level;
  let statPoints = 0; // Points de statistiques supplémentaires gagnés
  
  // Vérifier si le joueur monte de niveau (potentiellement plusieurs fois)
  let leveledUp = false;
  
  while (true) {
    const experienceForNextLevel = newLevel * 100; // Formule simple: niveau * 100
    
    if (newExperience >= experienceForNextLevel) {
      // Monter de niveau
      newLevel++;
      newExperience -= experienceForNextLevel;
      statPoints += 5; // Gain de 5 points de stats par niveau
      leveledUp = true;
    } else {
      break; // Sortir de la boucle si plus assez d'XP pour monter encore
    }
  }
  
  // Créer un objet pour la mise à jour
  const updateData: any = {
    experience: newExperience,
    level: newLevel,
  };
  
  // Si le joueur a monté de niveau, distribuer les points de stats aléatoirement
  if (leveledUp) {
    // Distribuer les points de stats gagnés de manière aléatoire
    const stats = ['strength', 'agility', 'speed', 'health', 'intelligence'];
    
    // Répartir les points de statPoints entre les statistiques
    while (statPoints > 0) {
      const randomStat = stats[Math.floor(Math.random() * stats.length)];
      const currentStatValue = brute[randomStat as keyof typeof brute] as number;
      
      updateData[randomStat] = (updateData[randomStat] || currentStatValue) + 1;
      statPoints--;
    }
  }
  
  // Mise à jour de la brute
  const updatedBrute = await prisma.brute.update({
    where: { id: bruteId },
    data: updateData,
  });
  
  // Renvoyer les informations sur la mise à jour
  return {
    updatedBrute,
    levelGain: newLevel - brute.level,
    experienceGain: amount,
    leveledUp,
  };
} 