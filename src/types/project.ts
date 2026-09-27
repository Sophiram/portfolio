export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Other";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  github: string;
  demo: string;
}
