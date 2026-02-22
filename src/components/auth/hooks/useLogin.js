"use client";

import { getUserByEmail, loginUser } from "@/services/get";
import { useAuth } from "@/store";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const { dispatch } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email")?.trim();
    const password = formData.get("password")?.trim();

    try {
      const users = await getUserByEmail(email);
      console.log(users);

      if (!users || users.length === 0) {
        alert("User not found");
        return;
      }

      const user = users[0];

      if (user.password !== password) {
        alert("Invalid password");
        return;
      }

      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token: "logged-in",
        },
      });

      setTimeout(() => {
      router.push("/dashboard");
      }, 100);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Try again.");
    }
  }

  return { handleLogin };
};
