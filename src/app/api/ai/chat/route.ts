import { NextResponse } from "next/server";

import { openai } from "@/lib/ai";

import { SYSTEM_PROMPT } from "@/config/ai-prompt";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const completion =
      await openai.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },

          {
            role: "user",
            content: body.message,
          },
        ],

      });

    return NextResponse.json({
      message:
        completion.choices[0].message.content,
    });

  } catch (error) {

    return NextResponse.json(
      {
        error: "Erreur IA",
      },
      {
        status: 500,
      }
    );

  }

}