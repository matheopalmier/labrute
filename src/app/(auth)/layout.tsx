import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <header className="container mx-auto p-4">
        <Link href="/" className="text-xl font-bold text-white hover:underline">
          La Brute
        </Link>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="container mx-auto p-4 text-center text-sm text-white/60">
        <p>© 2024 La Brute - Tous droits réservés</p>
      </footer>
    </div>
  );
} 