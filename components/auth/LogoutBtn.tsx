"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const supabase = createClient();
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };
  return (
    <Button onClick={logout} variant="outline">
      Logout
    </Button>
  );
};

export default LogoutBtn;
