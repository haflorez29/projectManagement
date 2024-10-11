"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="">
      <h2 className="mb-4 text-2xl font-bold">Your Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="rounded-lg border p-4 shadow bg-white">
            <h3>{project.name}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/projects/new"
        className="mt-6 inline-block rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
      >
        Create New Project
      </Link>
    </div>
  );
}
