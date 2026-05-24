import axios from "axios";

export async function createPayment({
  amount,
  transactionId,
  customerName,
  customerEmail,
}: {
  amount: number;
  transactionId: string;
  customerName: string;
  customerEmail: string;
}) {

  const response = await axios.post(
    "https://api-checkout.cinetpay.com/v2/payment",

    {
      apikey: process.env.CINETPAY_API_KEY,

      site_id: process.env.CINETPAY_SITE_ID,

      transaction_id: transactionId,

      amount,

      currency: "XOF",

      description: "Commande SmartCommerce AI",

      customer_name: customerName,

      customer_email: customerEmail,

      notify_url:
        `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/cinetpay`,

      return_url:
        `${process.env.NEXT_PUBLIC_APP_URL}/paiement/success`,
    }
  );

  return response.data;
}