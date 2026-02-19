"use client";

import { getToken } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, [pathname]);

  return (
    <aside className="w-64 bg-black text-white p-6 space-y-4">
      <h2 className="text-xl font-bold">ProductBoard</h2>

      <nav className="flex flex-col gap-3 cursor-pointer">
        <Link href="/dashboard">Dashboard</Link>
        {isLoggedIn ? <Link href="/products">Products</Link> : ""}
      </nav>
    </aside>
  );
}
