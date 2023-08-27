import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/button";

export const metadata: Metadata = {
  title: "About Page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-4xl text-center my-8 font-bold text-violet-900">
        About Page
      </h1>

      <nav className="flex items-center px-16">
        <Button className="px-4 text-lg font-mono" title="Home Page">
          <Link href="/">/</Link>
        </Button>
      </nav>

      <main className="flex flex-col items-center gap-8 font-mono">
        {children}
      </main>
    </>
  );
}
