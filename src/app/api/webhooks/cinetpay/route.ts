import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("Webhook CinetPay :", body);

    /*
      Vérifier paiement
      Mettre commande PAID
      Réduire stock
      Envoyer email
    */

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json(
      {
        error: "Webhook error",
      },
      {
        status: 500,
      }
    );

  }

}