"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      switch (key) {
        case "m":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "b":
          router.push("/blog");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const navItems = [
    { key: "M", href: "/", label: "Me" },
    { key: "P", href: "/projects", label: "Projects" },
    { key: "B", href: "/blog", label: "Blog" },
  ];

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background font-mono`}
        style={{ fontFamily: "Source Code Pro, monospace" }}
      >
        <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-4 z-50">
          {navItems.map(({ key, href, label }) => (
            <button
              key={key}
              onClick={() => router.push(href)}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary bg-background font-mono text-xl font-bold shadow-lg transition-all ${
                pathname === href ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {key}
              {pathname === href && (
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-secondary" />
              )}
              <span className="absolute left-full ml-2 hidden rounded-md bg-secondary px-2 py-1 text-sm opacity-0 transition-opacity group-hover:opacity-100 lg:block">
                {label}
              </span>
            </button>
          ))}
        </div>
        <div className="flex min-h-screen items-center justify-center">
          <main className="mx-auto max-w-4xl space-y-12 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
