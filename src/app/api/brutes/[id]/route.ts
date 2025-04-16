import { NextRequest, NextResponse } from 'next/server';
import { getBruteById, deleteBrute } from '@/lib/brutes';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

// Route GET pour récupérer une brute spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Pour les brutes des adversaires (qui commencent par un identifiant spécifique), 
    // on renvoie des données simulées
    if (id.startsWith('10')) {
      // Adversaires du système
      const systemBrutes = {
        '101': {
          id: '101',
          name: 'Goliath',
          level: 4,
          strength: 10,
          agility: 3,
          speed: 2,
          health: 25,
          intelligence: 1,
          victories: 15,
          defeats: 5,
          experience: 0,
          userId: 'system',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        '102': {
          id: '102',
          name: 'Ninja',
          level: 2,
          strength: 4,
          agility: 12,
          speed: 10,
          health: 15,
          intelligence: 6,
          victories: 8,
          defeats: 2,
          experience: 0,
          userId: 'system',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        '103': {
          id: '103',
          name: 'Sorcier',
          level: 5,
          strength: 3,
          agility: 5,
          speed: 6,
          health: 18,
          intelligence: 14,
          victories: 20,
          defeats: 8,
          experience: 0,
          userId: 'system',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        '104': {
          id: '104',
          name: 'Guerrier',
          level: 3,
          strength: 12,
          agility: 6,
          speed: 4,
          health: 22,
          intelligence: 3,
          victories: 5,
          defeats: 1,
          experience: 0,
          userId: 'system',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      };
      
      const systemBrute = systemBrutes[id as keyof typeof systemBrutes];
      if (systemBrute) {
        return NextResponse.json(systemBrute);
      }
    }
    
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
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bruteId = params.id;
    
    // Dans une application réelle, vous obtiendriez l'ID de l'utilisateur à partir de la session
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
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