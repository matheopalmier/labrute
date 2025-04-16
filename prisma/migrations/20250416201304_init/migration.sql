-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Brute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "strength" INTEGER NOT NULL DEFAULT 0,
    "agility" INTEGER NOT NULL DEFAULT 0,
    "speed" INTEGER NOT NULL DEFAULT 0,
    "health" INTEGER NOT NULL DEFAULT 0,
    "intelligence" INTEGER NOT NULL DEFAULT 0,
    "victories" INTEGER NOT NULL DEFAULT 0,
    "defeats" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Brute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rarity" TEXT NOT NULL DEFAULT 'common',
    "strengthBonus" INTEGER NOT NULL DEFAULT 0,
    "agilityBonus" INTEGER NOT NULL DEFAULT 0,
    "speedBonus" INTEGER NOT NULL DEFAULT 0,
    "healthBonus" INTEGER NOT NULL DEFAULT 0,
    "intelligenceBonus" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BruteItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bruteId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "equipped" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BruteItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BruteItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Combat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bruteId" TEXT NOT NULL,
    "opponentId" TEXT NOT NULL,
    "winnerId" TEXT,
    "logs" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Combat_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Combat_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "Brute" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BruteItem_bruteId_itemId_key" ON "BruteItem"("bruteId", "itemId");
