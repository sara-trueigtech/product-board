"use client";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
