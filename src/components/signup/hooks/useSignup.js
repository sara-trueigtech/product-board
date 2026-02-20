import { useRouter } from "next/navigation";
import { loginToken } from "@/utils";

import { getUserByEmail } from "@/services/get";
import { createUser } from "@/services/post";

export const useSignup = () => {
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const existingUser = await getUserByEmail(email);

      if (existingUser.length > 0) {
        alert("User already exists!");
        return;
      }

      await createUser({ name, email, password });

      loginToken();
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  }

  return { handleSignup };
};