import SignUpCard from "@/components/auth/SignUpCard";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }
  return (
    <div className="flex  flex-col items-center justify-center p-24">
      <SignUpCard />
    </div>
  );
};

export default SignUpPage;
