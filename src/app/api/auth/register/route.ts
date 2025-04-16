import { NextRequest, NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/lib/auth';
import { ZodError, z } from 'zod';

// Schéma de validation pour l'inscription
const registerSchema = z.object({
  username: z.string().min(3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { username, email, password } = registerSchema.parse(body);
    
    // Vérifier si l'email existe déjà
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'Cet email est déjà utilisé' },
        { status: 400 }
      );
    }
    
    // Créer l'utilisateur
    const user = await createUser(username, email, password);
    
    // Renvoyer une réponse sans le mot de passe
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(
      { user: userWithoutPassword, message: 'Inscription réussie' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Données invalides', errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l\'inscription' },
      { status: 500 }
    );
  }
} 