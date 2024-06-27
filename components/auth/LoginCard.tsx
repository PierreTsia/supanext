"use client";

import { z } from "zod";
import { login } from "@/app/login/actions";
import AuthForm from "./AuthForm";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "The password must be at least 8 characters long")
    .max(32, "The password must be a maximum 32 characters")
    .regex(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must have at least one number, one uppercase letter, one lowercase letter, and one special character"
    ),
});

export type LoginFormType = z.infer<typeof defaultValues>;

const fields = [
  {
    name: "email",
    label: "Email",
    placeholder: "john@email.com",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "******",
    type: "password",
    autoComplete: "current-password",
    description: (
      <Link href="/forgot-password" className="underline">
        Forgot your password?
      </Link>
    ),
  },
];

const LoginCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setIsSubmitting(true);
    await login(data);
    setIsSubmitting(false);
  };

  return (
    <AuthForm
      formSchema={loginFormSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      title="Login"
      description="Enter your email below to login to your account"
      fields={fields}
      footerText="No account yet?"
      footerLink="/signup"
      footerLinkText="Sign up"
    />
  );
};

export default LoginCard;
