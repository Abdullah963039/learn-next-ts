import type { Metadata } from "next";
import { getAllUsers } from "@/lib";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "This is users page",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return (
    <div className="container">
      <aside className="flex justify-between py-6">
        <h2 className="text-3xl font-semibold">Users</h2>
        <nav className="flex items-center">
          <Link href="/">Home</Link>
        </nav>
      </aside>

      <ul className="space-y-4 px-8">
        {users.map((user) => (
          <li key={user.id} className="hover:text-teal-600 text-lg font-medium">
            <Link href={`/users/${user.id}`}>
              {user.name}-({user.username})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
