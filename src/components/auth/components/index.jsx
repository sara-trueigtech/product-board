"use client";

import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { LOGIN_FORM_CONTROLLER } from "../constants";
import CommonFormController from "@/common/commonFormController";

export default function AuthForm() {
  const { handleLogin } = useLogin();

  const { handleSubmit, control } = useForm();

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        <CommonFormController
          controls={LOGIN_FORM_CONTROLLER}
          control={control}
        />

        <button className="bg-black text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
}
