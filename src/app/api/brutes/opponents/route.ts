import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function GET(request: NextRequest) {
  try {
    // Récupérer le niveau de la brute du joueur depuis la requête
    const { searchParams } = new URL(request.url);
    const levelParam = searchParams.get('level');
    const level = levelParam ? parseInt(levelParam, 10) : 1;
    
    // Récupérer la session pour identifier l'utilisateur
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    
    if (!userId) {
      return NextResponse.json(
        { message: 'Utilisateur non authentifié' },
        { status: 401 }
      );
    }
    
    console.log(`Recherche d'adversaires pour le niveau ${level}, utilisateur ${userId}`);
    
    // Plage de niveaux pour les adversaires (niveau actuel +/- 2)
    const minLevel = Math.max(1, level - 2);
    const maxLevel = level + 2;
    
    // Rechercher des brutes d'autres joueurs dans cette plage de niveaux
    const playerBrutes = await prisma.brute.findMany({
      where: {
        level: {
          gte: minLevel,
          lte: maxLevel
        },
        userId: {
          not: userId // Exclure les brutes du joueur actuel
        }
      },
      take: 10, // Augmenter le nombre de résultats puisqu'on n'ajoute plus de brutes système
      orderBy: {
        level: 'desc' // Trier par niveau décroissant
      }
    });
    
    console.log(`Nombre de brutes de joueurs trouvées: ${playerBrutes.length}`);
    
    // Si aucune brute trouvée, retourner un tableau vide
    if (playerBrutes.length === 0) {
      return NextResponse.json([]);
    }
    
    // Mélanger les brutes pour que ce ne soit pas toujours les mêmes adversaires en premier
    const shuffledOpponents = playerBrutes.sort(() => Math.random() - 0.5);
    
    console.log(`Total d'adversaires disponibles: ${shuffledOpponents.length}`);
    
    return NextResponse.json(shuffledOpponents);
  } catch (error) {
    console.error('Erreur lors de la récupération des adversaires:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération des adversaires' },
      { status: 500 }
    );
  }
} 