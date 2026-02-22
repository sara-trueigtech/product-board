"use client";

import {  useAuth } from "@/store";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const {state, dispatch} = useAuth();

  function logout() {
    dispatch({type: "LOGOUT"});
    router.push("/login");
  }

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-semibold">Dashboard</h1>

      {state.isAuth ? (
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1 cursor-pointer">
          Logout
        </button>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/login")}
            className="bg-black text-white px-3 py-1 cursor-pointer"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="bg-green-600 text-white px-3 py-1 cursor-pointer"
          >
            Signup
          </button>
        </div>
      )}
    </header>
  );
}
