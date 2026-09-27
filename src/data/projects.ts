import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Clothé — Modern Clothing E-Commerce",
    description:
      "A modern clothing e-commerce and multi-vendor marketplace platform with a responsive storefront, wishlist, shopping cart, admin dashboard, and Bakong KHQR/ABA payment integration.",
    image: "/projects/clothingstore1.png",
    category: "Full Stack",
    technologies: [
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "Bootstrap 5",
      "KHQR Payment",
      "MVC",
    ],
    github: "https://github.com/Sophiram/clothing_ecommerce_csharp",
    demo: "#",
  },
  {
    id: 2,
    title: "Multi Vendor Marketplace",
    description:
      "A multi-vendor commerce platform designed for listing products, browsing categories, and managing transactions across a shared marketplace experience.",
    image: "/projects/marketplace.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "PostgreSQL",
    ],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "A movie platform focused on discovering films, reviewing content, and integrating API-driven data for a modern entertainment experience.",
    image: "/projects/movie-app.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 4,
    title: "News Website",
    description:
      "A responsive news portal built to deliver featured stories, category-driven browsing, and a clean editorial layout for fast reading.",
    image: "/projects/news.png",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 5,
    title: "Parking System",
    description:
      "A parking management web application focused on quick access, vehicle tracking, and user-friendly operational flows.",
    image: "/projects/parking.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "QR Code",
      "UI Development",
    ],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 6,
    title: "Room Management Platform",
    description:
      "A room booking and operations dashboard tailored for facility management, scheduling, and administrative monitoring tasks.",
    image: "/projects/room-management.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "Recharts",
      "Axios",
    ],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 7,
    title: "Task Management",
    description:
      "A productivity dashboard for planning tasks, tracking progress, and visualizing workload with organized workflow panels.",
    image: "/projects/task-management.png",
    category: "Frontend",
    technologies: [
      "React",
      "Bootstrap",
      "Recharts",
      "React Router",
      "UI Design",
    ],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
  {
    id: 8,
    title: "Task Manager",
    description:
      "A practical task organizer built for daily planning, progress updates, and managing personal or team responsibilities.",
    image: "/projects/task-manager.png",
    category: "Other",
    technologies: ["React", "Bootstrap", "JavaScript", "Responsive UI"],
    github: "https://github.com/Sophiram",
    demo: "#",
  },
];
