import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
];

export default function UserList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td
              style={{
                color: !user.isAvailable ? "red" : undefined,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {user.isAvailable ? (
                <CheckCircleIcon style={{ width: "20px" }} />
              ) : (
                <XCircleIcon style={{ width: "20px" }} />
              )}
              <span>
                {user.name} ({user.isAvailable ? "Available" : "Not available"})
              </span>
            </td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
