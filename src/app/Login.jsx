import Link from "next/link";
import { useRef } from "react";

export const Login = ({ isPasswordLogin }) => {
  const formRef = useRef();

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const email = formData.get("email");
        const password = formData.get("password");
      }}
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
