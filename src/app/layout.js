import Sidebar from "@/components/layout/sidebar";
import "./globals.css";
import Header from "@/components/layout/header";
import { AuthProvider } from "@/store";

export const metadata = {
  title: "ProductBoard",
  description: "Product dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <AuthProvider>
          <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1">
              <Header />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
