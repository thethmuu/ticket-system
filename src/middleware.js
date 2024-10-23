import { NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./app/supabase-utils/reqResClient";

export async function middleware(request) {
  const { supabase, response } = getSupabaseReqResClient({ request });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const requestedPath = request.nextUrl.pathname;

  if (requestedPath.startsWith("/tickets") && !user) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (requestedPath === "/" && user) {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }

  return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
