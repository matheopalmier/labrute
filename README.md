# La Brute

Recréation du jeu browser "La Brute", un jeu de combat au tour par tour où vous créez des personnages avec des statistiques aléatoires qui combattent automatiquement d'autres "brutes".

## Caractéristiques

- Création de personnages avec des statistiques aléatoires
- Combats au tour par tour automatiques
- Progression par niveaux et amélioration des statistiques
- Collection d'objets pour améliorer votre brute
- Interface utilisateur moderne et réactive

## Technologies utilisées

- Next.js 14 avec App Router
- React
- TypeScript
- Tailwind CSS pour le styling
- Prisma avec SQLite pour la base de données
- NextAuth.js pour l'authentification

## Prérequis

- Node.js 18.17.0 ou plus récent
- npm 9.6.7 ou plus récent

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-nom/labrute.git
   cd labrute
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez la base de données :
   ```bash
   npx prisma migrate dev --name init
   ```

4. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

- `/src/app` - Répertoire principal de l'application Next.js
  - `/(auth)` - Routes d'authentification (login, register)
  - `/(game)` - Routes du jeu (dashboard, brutes, combat, shop)
- `/prisma` - Schéma et migrations de la base de données
- `/src/components` - Composants réutilisables
- `/src/lib` - Utilitaires et services

## Fonctionnalités à venir

- Implémentation complète du système de combat
- Classement des joueurs
- Effets d'objets spéciaux
- Animations de combat
- Événements spéciaux hebdomadaires

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
