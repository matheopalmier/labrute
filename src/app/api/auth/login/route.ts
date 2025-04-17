import { NextRequest, NextResponse } from 'next/server';
import { comparePasswords, findUserByEmail } from '@/lib/auth';
import { ZodError, z } from 'zod';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

// Schéma de validation pour la connexion
const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis'),
});

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { email, password } = loginSchema.parse(body);
    
    // Vérifier si l'utilisateur existe
    try {
      const user = await findUserByEmail(email);
      if (!user) {
        return NextResponse.json(
          { message: 'Email ou mot de passe incorrect' },
          { status: 401 }
        );
      }
      
      // Vérifier le mot de passe
      try {
        const passwordMatch = await comparePasswords(password, user.password);
        if (!passwordMatch) {
          return NextResponse.json(
            { message: 'Email ou mot de passe incorrect' },
            { status: 401 }
          );
        }
        
        // Renvoyer une réponse sans le mot de passe
        const { password: _, ...userWithoutPassword } = user;
        
        return NextResponse.json({
          user: userWithoutPassword,
          message: 'Connexion réussie'
        });
      } catch (passwordError) {
        console.error('Erreur lors de la vérification du mot de passe:', passwordError);
        return NextResponse.json(
          { message: 'Erreur d\'authentification. Veuillez réessayer plus tard.' },
          { status: 500 }
        );
      }
    } catch (dbError) {
      console.error('Erreur lors de la recherche de l\'utilisateur:', dbError);
      
      // Gestion spécifique des erreurs Prisma
      if (
        dbError instanceof PrismaClientKnownRequestError ||
        dbError instanceof PrismaClientUnknownRequestError ||
        dbError instanceof PrismaClientRustPanicError ||
        dbError instanceof PrismaClientInitializationError ||
        dbError instanceof PrismaClientValidationError
      ) {
        return NextResponse.json(
          { message: 'Erreur de connexion à la base de données. Veuillez réessayer plus tard.' },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { message: 'Une erreur est survenue lors de la connexion' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
    
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
      { message: 'Une erreur est survenue lors de la connexion' },
      { status: 500 }
    );
  }
} 