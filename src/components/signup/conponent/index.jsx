"use client";

import { useSignup } from "../hooks/useSignup";

export default function SignupForm() {
  const { handleSignup } = useSignup();

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          name="name"
          className="border p-2 w-full"
          placeholder="Name"
          required
        />

        <input
          name="email"
          type="email"
          className="border p-2 w-full"
          placeholder="Email"
          required
        />

        <input
          name="password"
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
          required
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Signup
        </button>
      </form>
    </div>
  );
}
