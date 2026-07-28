"use client";

import { useState } from "react";
import { signIn } from "@/services/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await signIn(
      email,
      password
    );

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/onboarding";
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </main>
  );
}