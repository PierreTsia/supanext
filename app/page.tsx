import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutBtn from "@/components/auth/LogoutBtn";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="flex h-full flex-col items-center justify-center gap-y-6">
      <h1 className="inline-flex text-xl  tracking-tight lg:text-2xl">
        Welcome back
        <p className="text-indigo-400 font-bold pl-3">{data.user.email} </p>
      </h1>
      <LogoutBtn />
    </main>
  );
}
