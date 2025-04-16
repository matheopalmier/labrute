import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-black/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 text-xl font-bold text-white" href="/dashboard">
          La Brute
        </Link>
        <nav className="hidden md:flex md:gap-4 md:text-sm">
          <Link className="text-white hover:text-purple-200" href="/dashboard">
            Tableau de bord
          </Link>
          <Link className="text-white hover:text-purple-200" href="/brutes">
            Mes Brutes
          </Link>
          <Link className="text-white hover:text-purple-200" href="/combat">
            Combat
          </Link>
          <Link className="text-white hover:text-purple-200" href="/shop">
            Boutique
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-purple-700 p-2 text-white">
            <svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
} 