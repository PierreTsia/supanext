"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitBtn from "@/components/auth/SubmitBtn";
import { LoginFormType } from "@/components/auth/LoginCard";
import { SignUpFormType } from "@/components/auth/SignUpCard";

type AuthFormProps = {
  formSchema: LoginFormType | SignUpFormType;
  defaultValues: LoginFormType | SignUpFormType;
  onSubmit: SubmitHandler<LoginFormType | SignUpFormType>;
  isSubmitting: boolean;
  title: string;
  description: string;
  fields: AuthFormField[];
  footerLink: string;
  footerLinkText: string;
  footerText: string;
};

type AuthFormField = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  description?: string;
};

const AuthForm = ({
  formSchema,
  defaultValues,
  onSubmit,
  isSubmitting,
  title,
  description,
  fields,
  footerLink,
  footerLinkText,
  footerText,
}: AuthFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {fields.map((field) => (
                <div className="grid gap-2" key={field.name}>
                  <FormField
                    control={form.control}
                    name={field.name}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={field.placeholder}
                            disabled={isSubmitting}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            {...formField}
                          />
                        </FormControl>
                        {field.description && (
                          <FormDescription>{field.description}</FormDescription>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <SubmitBtn isLoading={isSubmitting}>{title}</SubmitBtn>
              <Button
                disabled={isSubmitting}
                variant="outline"
                className="w-full"
              >
                {title} with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {footerText}{" "}
              <Link href={footerLink} className="underline">
                {footerLinkText}
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default AuthForm;
