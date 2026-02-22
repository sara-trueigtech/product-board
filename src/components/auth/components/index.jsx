"use client";

import { useLogin } from "../hooks/useLogin";

export default function AuthForm() {
  const { handleLogin } = useLogin();

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="email"
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

        <button className="bg-black text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
}
