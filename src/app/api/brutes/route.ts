import { NextRequest, NextResponse } from 'next/server';
import { createBrute, getBrutesByUserId } from '@/lib/brutes';
import { ZodError, z } from 'zod';

// Ajouter cette ligne près du début du fichier
export const dynamic = 'force-dynamic';

// Schéma de validation pour la création d'une brute
const createBruteSchema = z.object({
  userId: z.string().uuid('ID utilisateur invalide'),
  name: z.string().min(3, 'Le nom doit contenir au moins 3 caractères').max(30, 'Le nom ne peut pas dépasser 30 caractères'),
});

// Route GET pour récupérer les brutes d'un utilisateur
export async function GET(request: NextRequest) {
  try {
    // Dans une application réelle, vous obtiendriez l'ID de l'utilisateur à partir de la session
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { message: 'ID utilisateur requis' },
        { status: 400 }
      );
    }
    
    const brutes = await getBrutesByUserId(userId);
    
    return NextResponse.json({ brutes });
  } catch (error) {
    console.error('Erreur lors de la récupération des brutes:', error);
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la récupération des brutes' },
      { status: 500 }
    );
  }
}

// Route POST pour créer une nouvelle brute
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { userId, name } = createBruteSchema.parse(body);
    
    // Créer la brute
    const brute = await createBrute(userId, name);
    
    return NextResponse.json({ brute, message: 'Brute créée avec succès' }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la brute:', error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Données invalides', errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la création de la brute' },
      { status: 500 }
    );
  }
} 