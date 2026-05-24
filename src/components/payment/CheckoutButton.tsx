"use client";

import axios from "axios";

interface CheckoutButtonProps {
  amount: number;
}

export default function CheckoutButton({
  amount,
}: CheckoutButtonProps) {

  const handlePayment = async () => {

    try {

      const response = await axios.post(
        "/api/payment",
        {
          amount,
          name: "Client",
          email: "client@email.com",
        }
      );

      window.location.href =
        response.data.data.payment_url;

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <button
      onClick={handlePayment}
      className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-semibold"
    >
      Payer maintenant
    </button>
  );
}