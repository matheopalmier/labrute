import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "La Brute",
  description: "Un jeu de combat au tour par tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
