import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
  try {
    // Récupérer la session de l'utilisateur
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    // Récupérer les brutes de l'utilisateur
    const brutes = await prisma.brute.findMany({
      where: {
        userId: session.user.id
      },
      orderBy: {
        level: 'desc'
      }
    });
    
    return NextResponse.json(brutes);
  } catch (error) {
    console.error('Erreur lors de la récupération des brutes:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération des brutes' },
      { status: 500 }
    );
  }
} 