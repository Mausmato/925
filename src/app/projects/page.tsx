"use client";

import { Card } from "@/components/ui/card";
import { Code2, BookCheck, Timer } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "NeoDev League",
      description: "Global Competitive League",
      status: "ONLINE",
      icon: Code2,
      link: "#",
      launchDate: "Launched May 2024",
    },
    {
      name: "Moda",
      description: "Minimal Day Planner",
      status: "IN DEV",
      icon: BookCheck,
      link: "#",
      launchDate: "Founded Nov 2024",
    },
  ];
  
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-blue-400">Projects</h1>
        <div className="h-1 w-20 bg-blue-500/50 rounded-full" />
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.name}>
            <Card className="p-6 hover:bg-blue-500/5 transition-colors">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <project.icon className="h-5 w-5 text-blue-400" />
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        project.status === "ONLINE"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-blue-400/60">
                    <Timer className="h-4 w-4" />
                    <span>{project.launchDate}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
