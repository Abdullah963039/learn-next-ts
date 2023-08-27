import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold uppercase text-violet-500 text-center">
        Home page
      </h1>

      <Link
        href="/about"
        className="border rounded-lg py-2 px-6 my-6 mx-auto border-black hover:border-violet-500 hover:text-violet-500 active:border-violet-700 active:text-violet-700"
      >
        go to <code>/about</code>
      </Link>
    </main>
  );
}
