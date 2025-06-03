"use client";

import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Introducing the Blog",
      excerpt: "Short updates and articles will appear here soon.",
      date: "2024-01-01",
      readTime: "2 min read",
      tags: ["Announcement"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-blue-400">Blog</h1>
        <div className="h-1 w-20 bg-blue-500/50 rounded-full" />
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.title}>
            <Card className="p-6 hover:bg-blue-500/5 transition-colors group">
              <article className="space-y-3">
                <div className="flex items-center space-x-2  text-sm text-blue-400/60">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
