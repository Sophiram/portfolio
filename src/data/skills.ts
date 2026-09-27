export type SkillItem = {
  name: string;
  icon: string;
};

const baseDevicon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillCategories: Array<{ title: string; items: SkillItem[] }> = [
  {
    title: "Front-end",
    items: [
      { name: "Next.js", icon: `${baseDevicon}/nextjs/nextjs-original.svg` },
      { name: "React", icon: `${baseDevicon}/react/react-original.svg` },
      {
        name: "JavaScript",
        icon: `${baseDevicon}/javascript/javascript-original.svg`,
      },
      {
        name: "TypeScript",
        icon: `${baseDevicon}/typescript/typescript-original.svg`,
      },
      { name: "HTML5", icon: `${baseDevicon}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${baseDevicon}/css3/css3-original.svg` },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Java", icon: `${baseDevicon}/java/java-original.svg` },
      {
        name: "Spring Boot",
        icon: `${baseDevicon}/spring/spring-original.svg`,
      },
      {
        name: "ASP.NET",
        icon: `${baseDevicon}/dotnetcore/dotnetcore-original.svg`,
      },
      { name: "C#", icon: `${baseDevicon}/csharp/csharp-original.svg` },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: `${baseDevicon}/mysql/mysql-original.svg` },
      {
        name: "PostgreSQL",
        icon: `${baseDevicon}/postgresql/postgresql-original.svg`,
      },
      { name: "MongoDB", icon: `${baseDevicon}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git", icon: `${baseDevicon}/git/git-original.svg` },
      { name: "GitHub", icon: `${baseDevicon}/github/github-original.svg` },
      { name: "Docker", icon: `${baseDevicon}/docker/docker-original.svg` },
      { name: "VS Code", icon: `${baseDevicon}/vscode/vscode-original.svg` },
      {
        name: "Visual Studio",
        icon: `${baseDevicon}/visualstudio/visualstudio-plain.svg`,
      },
    ],
  },
  {
    title: "API & Workflow",
    items: [
      { name: "REST API", icon: `${baseDevicon}/nodejs/nodejs-original.svg` },
      { name: "Swagger", icon: `${baseDevicon}/swagger/swagger-original.svg` },
      { name: "Postman", icon: `${baseDevicon}/postman/postman-original.svg` },
    ],
  },
  {
    title: "UI / UX Design",
    items: [
      { name: "Figma", icon: `${baseDevicon}/figma/figma-original.svg` },
      { name: "UI Design", icon: `${baseDevicon}/css3/css3-original.svg` },
      {
        name: "Bootstrap",
        icon: `${baseDevicon}/bootstrap/bootstrap-original.svg`,
      },
    ],
  },
];
