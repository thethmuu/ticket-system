import Link from "next/link";
import CustomNavLink from "./CustomNavLink";

const appRoutes = [
  { name: "Ticket List", path: "/tickets" },
  { name: "Create new Ticket", path: "/tickets/new" },
  { name: "User List", path: "/tickets/users" },
];

export default function Nav() {
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
          <Link role="button" href="/logout" className="secondary">
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
