"use client";

import { z } from "zod";
import { signup } from "@/app/signup/actions";
import AuthForm from "./AuthForm";
import { useState } from "react";

const SignUpCard = () => {
  const signUpFormSchema = z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, "The password must be at least 8 characters long")
        .max(32, "The password must be a maximum 32 characters")
        .regex(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          "Password must have at least one number, one uppercase letter, one lowercase letter, and one special character"
        ),
      confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords don't match",
      path: ["confirm_password"],
    });

  const defaultValues = {
    email: "",
    password: "",
    confirm_password: "",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      autoComplete: "new-password",
      description: "Set your password",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      autoComplete: "new-password",
      placeholder: "******",
      type: "password",
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await signup(data);
    setIsSubmitting(false);
  };

  return (
    <AuthForm
      formSchema={signUpFormSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      title="Sign Up"
      description="Enter your email below to create your account"
      fields={fields}
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
    />
  );
};

export default SignUpCard;
