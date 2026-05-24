import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const tech = await prisma.category.create({
    data: {
      name: "Tech",
      slug: "tech",
    },
  });

  await prisma.product.createMany({
    data: [

      {
        name: "iPhone 15 Pro",
        slug: "iphone-15-pro",
        description:
          "Le smartphone premium nouvelle génération.",
        price: 950000,
        stock: 12,

        images: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
        ],

        tags: ["apple", "smartphone"],

        categoryId: tech.id,
      },

      {
        name: "Casque Gaming RGB",
        slug: "casque-gaming-rgb",
        description:
          "Casque ultra immersif pour gaming.",
        price: 45000,
        stock: 20,

        images: [
          "https://images.unsplash.com/photo-1585298723682-7115561c51b7",
        ],

        tags: ["gaming"],

        categoryId: tech.id,
      },

    ],
  });

}

main();