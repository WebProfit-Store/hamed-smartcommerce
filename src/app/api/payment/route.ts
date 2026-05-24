import { NextResponse } from "next/server";

import { createPayment } from "@/services/cinetpay";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const payment = await createPayment({
      amount: body.amount,
      transactionId: crypto.randomUUID(),
      customerName: body.name,
      customerEmail: body.email,
    });

    return NextResponse.json(payment);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Erreur paiement",
      },
      {
        status: 500,
      }
    );

  }

}