import { NextRequest, NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/lib/auth';
import { ZodError, z } from 'zod';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

// Configuration pour empêcher la génération statique de cette route
export const dynamic = 'force-dynamic';

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
    try {
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return NextResponse.json(
          { message: 'Cet email est déjà utilisé' },
          { status: 400 }
        );
      }
    } catch (dbError) {
      console.error('Erreur lors de la vérification de l\'email:', dbError);
      return NextResponse.json(
        { message: 'Erreur de connexion à la base de données. Veuillez réessayer plus tard.' },
        { status: 503 }
      );
    }
    
    // Créer l'utilisateur
    try {
      const user = await createUser(username, email, password);
      
      // Renvoyer une réponse sans le mot de passe
      const { password: _, ...userWithoutPassword } = user;
      
      return NextResponse.json(
        { user: userWithoutPassword, message: 'Inscription réussie' },
        { status: 201 }
      );
    } catch (createError) {
      console.error('Erreur lors de la création de l\'utilisateur:', createError);
      
      // Gestion spécifique des erreurs Prisma
      if (
        createError instanceof PrismaClientKnownRequestError ||
        createError instanceof PrismaClientUnknownRequestError ||
        createError instanceof PrismaClientRustPanicError ||
        createError instanceof PrismaClientInitializationError ||
        createError instanceof PrismaClientValidationError
      ) {
        return NextResponse.json(
          { message: 'Erreur de base de données. Veuillez réessayer plus tard.' },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { message: 'Une erreur est survenue lors de l\'inscription' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Données invalides', errors: error.errors },
        { status: 400 }
      );
    }
    
    // Si l'erreur est liée au parsing JSON (comme dans votre cas)
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
      return NextResponse.json(
        { message: 'Format de données invalide' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l\'inscription' },
      { status: 500 }
    );
  }
} 