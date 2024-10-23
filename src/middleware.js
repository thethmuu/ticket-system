import { getSupabaseReqResClient } from "./app/supabase-utils/reqResClient";

export async function middleware(request) {
  const { supabase, response } = getSupabaseReqResClient({ request });

  return response.value;
}
