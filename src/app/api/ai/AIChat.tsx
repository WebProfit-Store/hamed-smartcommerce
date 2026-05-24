"use client";

import { useState } from "react";
import axios from "axios";

export default function AIChat() {

  const [message, setMessage] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] = useState<
    {
      role: string;
      content: string;
    }[]
  >([]);

  const sendMessage = async () => {

    if (!message) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const response = await axios.post(
        "/api/ai/chat",
        {
          message,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.message,
        },
      ]);

      setMessage("");

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <div className="space-y-4 h-[400px] overflow-y-auto">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }
          >

            <div
              className={
                msg.role === "user"
                  ? "inline-block bg-indigo-600 px-4 py-3 rounded-2xl"
                  : "inline-block bg-zinc-800 px-4 py-3 rounded-2xl"
              }
            >
              {msg.content}
            </div>

          </div>

        ))}

      </div>

      <div className="flex gap-3 mt-6">

        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Posez votre question..."
          className="flex-1 bg-black border border-zinc-700 rounded-2xl px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 px-6 rounded-2xl"
        >
          Envoyer
        </button>

      </div>

    </div>
  );
}