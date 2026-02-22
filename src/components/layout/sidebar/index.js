"use client";

import { useAuth } from "@/store";
import Link from "next/link";

export default function Sidebar() {
  const { state } = useAuth();

  return (
    <aside className="w-64 bg-black text-white p-6 space-y-4">
      <h2 className="text-xl font-bold">ProductBoard</h2>

      <nav className="flex flex-col gap-3 cursor-pointer">
        <Link href="/dashboard">Dashboard</Link>
        {state.isAuth && <Link href="/products">Products</Link>}
      </nav>
    </aside>
  );
}
