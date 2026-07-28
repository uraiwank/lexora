"use client";

import { useState } from "react";
import { signUp } from "@/services/auth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await signUp(
      email,
      password
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Create Account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded p-3"
        >
          Create Account
        </button>
      </form>
    </main>
  );
}
