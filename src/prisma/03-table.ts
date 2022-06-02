import { Prisma, PrismaClient } from '@prisma/client';

export const tables: Prisma.TableCreateInput[] = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
];

export const table = async (prisma: PrismaClient) => {
  for (const obj of Object.values(tables)) {
    await prisma.table.upsert({
      where: { number: obj.number },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
