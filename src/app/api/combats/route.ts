import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { addExperience } from '@/lib/brutes';

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
    }
    
    // Récupérer les données du combat
    const body = await request.json();
    const { bruteId, opponentId, winnerId, logs, expGained } = body;
    
    console.log('Données de combat reçues:', { bruteId, opponentId, winnerId, expGained });
    
    // Vérifier que la brute appartient à l'utilisateur
    const brute = await prisma.brute.findFirst({
      where: {
        id: bruteId,
        userId: session.user.id
      }
    });
    
    if (!brute) {
      console.log('Brute non trouvée ou non autorisée:', bruteId);
      return NextResponse.json({ message: 'Brute non trouvée ou non autorisée' }, { status: 404 });
    }
    
    console.log('Brute trouvée:', brute.name);
    
    // Vérifier que l'adversaire existe
    const opponent = await prisma.brute.findUnique({
      where: { id: opponentId }
    });
    
    if (!opponent) {
      console.log('Adversaire non trouvé:', opponentId);
      return NextResponse.json({ message: 'Adversaire non trouvé' }, { status: 404 });
    }
    
    // Enregistrer le combat dans la base de données
    let combat;
    try {
      combat = await prisma.combat.create({
        data: {
          bruteId,
          opponentId,
          winnerId: winnerId || null,
          logs: logs || '[]', // Stocker les logs comme une chaîne JSON
        }
      });
      console.log('Combat enregistré avec succès, ID:', combat.id);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du combat dans la base:', err);
      // Continuer quand même pour au moins mettre à jour les stats de la brute
    }
    
    // Ajouter l'expérience à la brute du joueur
    let expResult;
    try {
      expResult = await addExperience(bruteId, expGained);
      console.log('Expérience ajoutée:', expResult);
    } catch (err) {
      console.error('Erreur lors de l\'ajout d\'expérience:', err);
    }
    
    // Mettre à jour les statistiques de victoires/défaites
    if (winnerId) {
      if (winnerId === bruteId) {
        // Le joueur a gagné
        console.log('Mise à jour des victoires pour:', bruteId);
        await prisma.brute.update({
          where: { id: bruteId },
          data: { victories: { increment: 1 } },
        });
      } else {
        // Le joueur a perdu
        console.log('Mise à jour des défaites pour:', bruteId);
        await prisma.brute.update({
          where: { id: bruteId },
          data: { defeats: { increment: 1 } },
        });
      }
    }
    
    // Vérifier que les mises à jour ont bien été effectuées
    const updatedBrute = await prisma.brute.findUnique({
      where: { id: bruteId },
      select: { victories: true, defeats: true, experience: true, level: true }
    });
    
    console.log('État de la brute après mise à jour:', updatedBrute);
    
    return NextResponse.json({ 
      message: 'Combat enregistré avec succès',
      combat,
      experienceGained: expGained,
      updatedStats: updatedBrute // Renvoyer les statistiques mises à jour pour vérification
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du combat:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l\'enregistrement du combat' },
      { status: 500 }
    );
  }
}

// Route pour récupérer l'historique des combats d'une brute
export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
    }
    
    // Récupérer l'ID de la brute depuis les paramètres de requête
    const url = new URL(request.url);
    const bruteId = url.searchParams.get('bruteId');
    
    if (!bruteId) {
      return NextResponse.json({ message: 'ID de brute requis' }, { status: 400 });
    }
    
    // Vérifier que la brute appartient à l'utilisateur
    const brute = await prisma.brute.findFirst({
      where: {
        id: bruteId,
        userId: session.user.id
      }
    });
    
    if (!brute) {
      return NextResponse.json({ message: 'Brute non trouvée ou non autorisée' }, { status: 404 });
    }
    
    // Récupérer les combats de la brute
    const combats = await prisma.combat.findMany({
      where: {
        OR: [
          { bruteId },
          { opponentId: bruteId }
        ]
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        brute: {
          select: {
            name: true,
            level: true
          }
        },
        opponent: {
          select: {
            name: true,
            level: true
          }
        }
      }
    });
    
    return NextResponse.json(combats);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des combats:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération des combats' },
      { status: 500 }
    );
  }
} 