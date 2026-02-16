"use client";

import { logoutToken, getToken, loginToken } from "@/utils";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, [pathname]); 

  function logout() {
    logoutToken();
    window.location.href = "/login";
  }

  function handleLogin() {
    loginToken();
    window.location.href = "/dashboard";
  }

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-semibold">Dashboard</h1>

      {isLoggedIn ? (
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1">
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className="bg-black text-white px-3 py-1">
          Login
        </button>
      )}
    </header>
  );
}
