import { supabase } from "@/lib/supabase/client";

export async function updateRole(
  userId: string,
  role: string
) {
  return supabase
    .from("profiles")
    .update({ role })
    .eq("id", userId);
}