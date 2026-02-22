import { useRouter } from "next/navigation";
import { loginToken, useAuth } from "@/store";

import { getUserByEmail } from "@/services/get";
import { createUser } from "@/services/post";

export const useSignup = () => {
  const router = useRouter();
  const { dispatch } = useAuth();

  async function handleSignup(data) {
    const { name, email, password } = data;

    try {
      const existingUser = await getUserByEmail(email);
      console.log(existingUser);
      if (existingUser.length > 0) {
        alert("User already exists!");
        return;
      }

      const newUser = await createUser({ name, email, password });

      dispatch({
        type: "SIGNUP",
        payload: { user: newUser },
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  }

  return { handleSignup };
};
