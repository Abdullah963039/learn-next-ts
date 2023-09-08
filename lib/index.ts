export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Failed to fetch users");

  return res.json();
}

export async function getUser(id: string) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  if (!res.ok) throw new Error("Failed to fetch user");

  return res.json();
}

export async function getUserPosts(id: string) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );

  if (!res.ok) throw new Error("Failed to fetch user's posts");

  return res.json();
}
