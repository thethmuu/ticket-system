"use client";

// import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavLink({ href, children }) {
  const pathname = usePathname();
  const isMatch = pathname === href;

  return (
    <Link
      role="button"
      href={href}
      className={isMatch ? "contrast" : "secondary outline"}
    >
      {children}
    </Link>
  );
}
