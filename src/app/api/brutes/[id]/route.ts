import { NextRequest, NextResponse } from 'next/server';
import { getBruteById, deleteBrute } from '@/lib/brutes';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

// Configuration pour empêcher la génération statique de cette route
export const dynamic = 'force-dynamic';

// Route GET pour récupérer une brute spécifique
export async function GET(
  request: NextRequest
) {
  try {
    // Extraire l'ID de la brute depuis l'URL
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    
    // Vérifier l'authentification pour les brutes des joueurs
    const session = await getServerSession(authOptions);
    
    // Récupérer la brute depuis la base de données
    const brute = await prisma.brute.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            item: true,
          }
        }
      }
    });
    
    if (!brute) {
      return NextResponse.json({ message: 'Brute non trouvée' }, { status: 404 });
    }
    
    // Si la brute n'appartient pas à l'utilisateur connecté, on limite les informations renvoyées
    if (!session?.user?.id || brute.userId !== session.user.id) {
      // Pour les autres joueurs, on renvoie uniquement les informations publiques
      const publicBrute = {
        id: brute.id,
        name: brute.name,
        level: brute.level,
        victories: brute.victories,
        defeats: brute.defeats,
        strength: brute.strength,
        agility: brute.agility,
        speed: brute.speed,
        health: brute.health,
        intelligence: brute.intelligence,
        userId: brute.userId
      };
      
      return NextResponse.json(publicBrute);
    }
    
    // Si c'est la brute de l'utilisateur connecté, on renvoie toutes les informations
    return NextResponse.json(brute);
    
  } catch (error) {
    console.error('Erreur lors de la récupération de la brute:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération de la brute' },
      { status: 500 }
    );
  }
}

// Route DELETE pour supprimer une brute
export async function DELETE(
  request: NextRequest
) {
  try {
    // Extraire l'ID de la brute depuis l'URL
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const bruteId = pathSegments[pathSegments.length - 1];
    
    // Dans une application réelle, vous obtiendriez l'ID de l'utilisateur à partir de la session
    const userId = url.searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { message: 'ID utilisateur requis' },
        { status: 400 }
      );
    }
    
    await deleteBrute(bruteId, userId);
    
    return NextResponse.json({ message: 'Brute supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la brute:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la suppression de la brute' },
      { status: 500 }
    );
  }
} 