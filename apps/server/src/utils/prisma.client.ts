import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

const getPrismaInstance = () => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
};

export default getPrismaInstance;
