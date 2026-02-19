import { loginToken } from "@/utils";
import { useRouter } from "next/navigation";

export const useSignup = () => {
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch(`http://localhost:4000/users?email=${email}`);
      const existingUser = await res.json();

      if (existingUser.length > 0) {
        alert("User already exists!");
        return;
      }

      await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      loginToken();
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
    }
  }

  return { handleSignup };
};
