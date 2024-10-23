import { NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./app/supabase-utils/reqResClient";

export async function middleware(request) {
  const { supabase, response } = getSupabaseReqResClient({ request });
  const session = await supabase.auth.getSession();

  const requestedPath = request.nextUrl.pathname;
  const sessionUser = session.data?.session?.user;

  if (requestedPath.startsWith("/tickets") && !sessionUser) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (requestedPath === "/" && sessionUser) {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }

  return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
