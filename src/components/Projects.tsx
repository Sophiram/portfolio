"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const filters = ["All", "Frontend", "Backend", "Full Stack", "Other"] as const;

export function Projects() {
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

    const visibleProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="section-padding">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="eyebrow">Portfolio</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="filter-row">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="project-grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
