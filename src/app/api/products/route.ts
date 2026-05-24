import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {

  try {

    const products =
      await prisma.product.findMany({
        include: {
          category: true,
        },
      });

    return NextResponse.json(products);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Erreur produits",
      },
      {
        status: 500,
      }
    );

  }

}