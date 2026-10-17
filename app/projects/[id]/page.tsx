
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../data/projects";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const project = projectsData.find(
    (item) => item.id === id
  );

  if (!project) {
    return {
      title: "Loyiha topilmadi",
      description: "Loyiha haqida ma'lumot topilmadi.",
    };
  }

  return {
    title: `${project.title} | Mohidil Jahongirova`,
    description: project.longDescription,
  };
}
export default async function ProjectDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const project = projectsData.find(
    (item) => String(item.id) === id
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090D16] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-cyan-400 transition hover:text-cyan-300"
        >
          ← Barcha loyihalarga qaytish
        </Link>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#111827] p-8 md:p-12">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
            LOYIHA TAFSILOTLARI
          </span>

          <h1 className="mt-7 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 leading-8 text-gray-400">
            {project.description}
          </p>

          <h2 className="mt-10 text-2xl font-bold">
            Ishlatilgan texnologiyalar
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">Loyiha ID</p>
            <p className="mt-2 text-lg font-semibold text-cyan-400">
              #{project.id}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
