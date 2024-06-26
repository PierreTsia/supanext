import LoginCard from "@/components/auth/LoginCard";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
