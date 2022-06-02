import { Prisma, PrismaClient } from '@prisma/client';

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Pizza de Mussarela',
    description:
      'Queijo mussarela fino do fino, massa fina e borda recheada de catupiry',
    price: 12.34,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
  {
    name: 'Pizza de Calabresa',
    description:
      'Queijo mussarela fino do fino, massa fina e borda recheada de catupiry',
    price: 12.34,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
  {
    name: 'Pizza de Frango com Catupiry',
    description:
      'Queijo mussarela fino do fino, massa fina e borda recheada de catupiry',
    price: 12.34,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
];

export const product = async (prisma: PrismaClient) => {
  for (const obj of Object.values(products)) {
    await prisma.product.upsert({
      where: { name: obj.name },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
