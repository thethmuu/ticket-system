"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getSupabaseBrowserClient } from "../supabase-utils/browserClient";
import CustomNavLink from "./CustomNavLink";

const appRoutes = [
  { name: "Ticket List", path: "/tickets" },
  { name: "Create new Ticket", path: "/tickets/new" },
  { name: "User List", path: "/tickets/users" },
];

export default function Nav() {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [router, supabase]);

  return (
    <nav>
      <ul>
        {appRoutes.map(({ name, path }) => (
          <li key={path}>
            <CustomNavLink href={path}>{name}</CustomNavLink>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link
            prefetch={false}
            href="/auth/logout"
            role="button"
            className="secondary"
            onClick={() => {
              supabase.auth.signOut();
            }}
          >
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
