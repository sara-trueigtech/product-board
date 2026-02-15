"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6 space-y-4">
      <h2 className="text-xl font-bold">ProductBoard</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  );
}
