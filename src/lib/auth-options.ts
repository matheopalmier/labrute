import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { comparePasswords, findUserByEmail } from '@/lib/auth';

// Étendre les types pour inclure l'ID dans la session utilisateur
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
  
  interface User {
    id: string;
    name: string;
    email: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Récupérer l'utilisateur depuis la base de données
          const user = await findUserByEmail(credentials.email);
          
          if (!user) {
            return null;
          }
          
          // Vérifier le mot de passe
          const isValid = await comparePasswords(credentials.password, user.password);
          
          if (!isValid) {
            return null;
          }
          
          // Retourner les données de l'utilisateur sans le mot de passe
          return {
            id: user.id,
            name: user.username,
            email: user.email,
          };
        } catch (error) {
          console.error('Erreur lors de l\'authentification:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Ajouter l'ID utilisateur au token JWT
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Ajouter l'ID utilisateur à la session
      session.user.id = token.id as string;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'votre_secret_par_defaut',
}; 