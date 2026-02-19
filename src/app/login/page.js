"use client";

import { loginToken } from "@/utils";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    loginToken();
    router.push("/dashboard");
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input className="border p-2 w-full" placeholder="Email" />
        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
