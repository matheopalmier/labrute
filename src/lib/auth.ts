import bcrypt from 'bcrypt';
import { prisma } from './prisma';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createUser(username: string, email: string, password: string) {
  const hashedPassword = await hashPassword(password);
  
  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      brutes: true,
    },
  });
} 