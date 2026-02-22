"use client";

import CommonFormController from "@/common/commonFormController";
import { useSignup } from "../hooks/useSignup";
import { SIGNUP_FORM_CONTROLLER } from "../constants";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { handleSignup } = useSignup();
  const { handleSubmit, control } = useForm();

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>

      <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
        <CommonFormController
          controls={SIGNUP_FORM_CONTROLLER}
          control={control}
        />
        <button className="bg-black text-white px-4 py-2 w-full">
          Signup
        </button>
      </form>
    </div>
  );
}
