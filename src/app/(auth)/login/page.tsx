'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation basique
    if (!formData.email || !formData.password) {
      setError('Tous les champs sont requis');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Utiliser NextAuth pour la connexion
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password
      });
      
      if (result?.error) {
        throw new Error(result.error || 'Email ou mot de passe incorrect');
      }
      
      // Récupérer les informations de l'utilisateur pour les stocker dans localStorage
      try {
        const userResponse = await fetch('/api/users/me');
        
        if (userResponse.ok) {
          const userData = await userResponse.json();
          // Stocker les données utilisateur dans localStorage
          localStorage.setItem('user', JSON.stringify({
            id: userData.id,
            username: userData.username || userData.name,
            email: userData.email
          }));
          console.log('Utilisateur connecté et stocké dans localStorage:', userData);
        } else {
          console.error('Erreur lors de la récupération des données utilisateur');
        }
      } catch (userError) {
        console.error('Erreur lors de la récupération des données utilisateur:', userError);
      }
      
      // Redirection vers le tableau de bord
      router.push('/dashboard');
      router.refresh(); // Pour s'assurer que tous les composants sont mis à jour avec la nouvelle session
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900 sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Connexion</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Connectez-vous pour accéder à votre compte
          </p>
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-500 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-zinc-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-zinc-100" htmlFor="email">
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-purple-400 dark:focus:ring-offset-zinc-900"
              id="email"
              placeholder="votre@email.com"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none text-zinc-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-zinc-100" htmlFor="password">
                Mot de passe
              </label>
              <Link className="text-sm text-purple-600 hover:text-purple-500 dark:text-purple-400" href="#">
                Mot de passe oublié?
              </Link>
            </div>
            <input
              className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-purple-400 dark:focus:ring-offset-zinc-900"
              id="password"
              placeholder="••••••••"
              required
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <button
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-purple-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-400 dark:focus:ring-offset-zinc-900"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>
        
        <div className="text-center text-sm">
          <p className="text-zinc-600 dark:text-zinc-400">
            Pas encore de compte?{' '}
            <Link className="text-purple-600 underline hover:text-purple-500 dark:text-purple-400" href="/register">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-white">
        <Link href="/" className="hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
} 