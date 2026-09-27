"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="project-card group">
            <div className="project-image-wrap">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="project-image"
                    onError={(event) => {
                        const target = event.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement?.classList.add("placeholder");
                    }}
                />
                <div className="project-overlay">
                    <div className="project-actions">
                        <a href={project.github} target="_blank" rel="noreferrer" className="mini-button">
                            GitHub
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="mini-button">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technology-stack">
                    {project.technologies.map((technology) => (
                        <span key={`${project.id}-${technology}`} className="tech-pill">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
