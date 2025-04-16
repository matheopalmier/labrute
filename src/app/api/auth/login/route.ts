import { NextRequest, NextResponse } from 'next/server';
import { comparePasswords, findUserByEmail } from '@/lib/auth';
import { ZodError, z } from 'zod';

// Schéma de validation pour la connexion
const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { email, password } = loginSchema.parse(body);
    
    // Vérifier si l'utilisateur existe
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { message: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }
    
    // Vérifier le mot de passe
    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }
    
    // Créer une session (simplifiée pour l'exemple)
    // Dans une application réelle, vous utiliseriez NextAuth.js
    
    // Renvoyer une réponse sans le mot de passe
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      user: userWithoutPassword,
      message: 'Connexion réussie'
    });
  } catch (error) {
    console.error('Erreur de connexion:', error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Données invalides', errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la connexion' },
      { status: 500 }
    );
  }
} 