import Link from "next/link";
import { useRef } from "react";
import { getSupabaseBrowserClient } from "./supabase-utils/browserClient";
import { useRouter } from "next/navigation";

export const Login = ({ isPasswordLogin }) => {
  const formRef = useRef();
  const supabase = getSupabaseBrowserClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    // only for password login
    isPasswordLogin && e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const password = formData.get("password");

    if (isPasswordLogin) {
      supabase.auth.signInWithPassword({ email, password }).then((result) => {
        if (result.data?.user) {
          router.push("/tickets");
        } else {
          alert("Failed to log in!");
        }
      });
    } else {
      console.log("not");
    }
  };

  return (
    <form
      action={isPasswordLogin ? "/auth/password-login" : "/auth/magic-link"}
      method="POST"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <article style={{ maxWidth: "420px", margin: "auto" }}>
        <header>Login</header>
        <fieldset>
          <label htmlFor="email">
            Email
            <input type="email" id="email" name="email" required />
          </label>

          {isPasswordLogin && (
            <label htmlFor="password">
              Password
              <input type="password" id="password" name="password" />
            </label>
          )}
        </fieldset>

        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>

        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </article>
    </form>
  );
};
