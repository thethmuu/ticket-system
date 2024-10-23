"use client";
import React, { useEffect } from "react";
import { getSupabaseBrowserClient } from "./supabase-utils/browserClient";
import { Login } from "./Login";

export default function Home({ searchParams }) {
  const { magicLink } = React.use(searchParams || {});
  const wantsMagicLink = magicLink === "yes";

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then((result) => {
      console.log("buckets ", result);
    });
  }, []);

  return <Login isPasswordLogin={!wantsMagicLink} />;
}
