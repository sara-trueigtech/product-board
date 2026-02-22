"use client";
import AuthForm from "@/components/auth/components";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-96 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 cursor-pointer"
        >
          ✕
        </button>

        <AuthForm />
      </div>
    </div>
  );
}