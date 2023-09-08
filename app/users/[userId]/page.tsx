import { getUser, getUserPosts } from "@/lib";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

// Generate Dynamic Metadata
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);

  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name} #${user.username}`,
  };
}

export default async function UserPage({ params }: Params) {
  const userData: Promise<User> = getUser(params.userId);
  const userPosts: Promise<Post[]> = getUserPosts(params.userId);

  const [user, posts] = await Promise.all([userData, userPosts]);

  return (
    <div className="container">
      <aside className="flex justify-between py-6">
        <h2 className="text-3xl font-semibold text-teal-500">
          {user.name}
          <span className="text-sm font-medium">__({user.username})</span>
        </h2>
        <nav className="flex items-center gap-3">
          <Link href="/" className="hover:text-teal-800">
            Home
          </Link>
          <Link href="/users" className="hover:text-teal-800">
            Users
          </Link>
        </nav>
      </aside>

      <Suspense
        fallback={
          <h4 className="text-2xl font-semibold text-center text-sky-600">
            Loading ...
          </h4>
        }
      >
        <UserPosts promise={userPosts} />
      </Suspense>
    </div>
  );
}
