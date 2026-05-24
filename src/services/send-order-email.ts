import { resend } from "@/lib/mail";

export async function sendOrderEmail(
  email: string
) {

  await resend.emails.send({

    from:
      "SmartCommerce <onboarding@resend.dev>",

    to: email,

    subject:
      "Commande confirmée",

    html: `
      <h1>Merci pour votre commande</h1>
    `,
  });

}