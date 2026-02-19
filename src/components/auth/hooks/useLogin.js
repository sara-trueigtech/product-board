import { loginToken } from "@/utils";
import { useRouter } from "next/navigation";


export const useLogin = () => {
    const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    loginToken();
    router.push("/dashboard");
  }

  return {handleLogin}
}