"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubEvent {
  type: string;
  // Add other properties if needed
}

async function fetchGitHubContributions(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`
    );
    const data = await response.json();
    const pushEvents = data.filter((event: GitHubEvent) => event.type === "PushEvent");
    return pushEvents.length;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return 0;
  }
}

export default function Home() {
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    fetchGitHubContributions("MAUSMATO").then(setContributions);
  }, []);

  return (
    <div className="space-y-12">
      <header className="relative flex flex-col items-center space-y-4 text-center">
        <p className="max-w-2xl text-sm font-extrabold text-blue-400/80">
          controls {"<>"} M (me), P (projects), and B (blog)
        </p>
        <h1 className="text-6xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Matthew Singer
          </span>
        </h1>
        <p className="max-w-2xl text-xl text-blue-400/80">
          17, Founder, Designer, Student, Sprinter
        </p>
      </header>

      <nav className="flex justify-center space-x-6 py-4">
        {[
          {
            icon: Github,
            href: "https://github.com/MAUSMATO",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/matthewsingerr/",
            label: "LinkedIn",
          },
          { icon: Twitter, href: "https://x.com/matthew2l2", label: "Twitter" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon className="h-6 w-6 text-blue-400" /> {/* Changed color to blue */}
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </nav>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">GitHub Activity</h2>
        <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Github className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="font-bold text-xl">{contributions}</h3>
                <p className="text-sm text-blue-400/80">Recent Contributions</p>
              </div>
            </div>
            <Link
              href="https://github.com/MAUSMATO"
              className="text-blue-400 hover:text-blue-300"
            >
              View Profile →
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
