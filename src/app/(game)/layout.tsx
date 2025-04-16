import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
} 