export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "e-commerce-app",
    title: "E-Commerce Onlayn Do'kon",
    description: "Zamonaviy internet magazin va to'lov tizimlari integratsiyasi.",
    longDescription: "Next.js, Tailwind CSS va Stripe to'lov tizimi orqali yaratilgan tezkor va xavfsiz onlayn magazin platformasi.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    demoUrl: "https://example.com/demo1",
  },
  {
    id: "task-management",
    title: "Task Management Tizimi",
    description: "Jamoaviy vazifalarni boshqarish platformasi.",
    longDescription: "Real vaqt rejimida loyihalarni boshqarish va vazifalarni taqsimlash uchun qulay interfeysga ega ilova.",
    image: "/images/project2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://example.com/demo2",
  },
  {
    id: "ai-content-generator",
    title: "AI Kontent Generatori",
    description: "Shtatdagi mualliflar uchun sun'iy intellekt yordamchisi.",
    longDescription: "OpenAI API orqali matn va rasmlar yaratish uchun mo'ljallangan zamonaviy SaaS ilovasi.",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    demoUrl: "https://example.com/demo3",
  },
];