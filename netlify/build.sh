#!/bin/bash

# Assurez-vous que le client Prisma est généré
echo "Generating Prisma Client..."
npx prisma generate

# Créez l'application Next.js
echo "Building Next.js application..."
npm run build

echo "Build completed successfully!" 