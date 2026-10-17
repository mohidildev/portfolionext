import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "../data/projects";

export const metadata: Metadata = {
  title: "Loyihalarim | Mohidil Jahongirova",
  description:
    "Mohidil Jahongirova portfolio loyihalari. React, Next.js, TypeScript va Tailwind CSS yordamida yaratilgan web-loyihalar.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090D16] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-[500px] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-[0.2em] text-cyan-400">
            MY PORTFOLIO
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Mening{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Loyihalarim
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            G'oyalarim, tajribalarim va amaliy bilimlarim asosida yaratilgan
            web-loyihalar bilan tanishing.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">
              {String(projectsData.length).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Jami loyihalar
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">
              100%
            </p>
            <p className="mt-2 text-sm text-gray-400">
              O'rganish va rivojlanish
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">
              Code
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Har bir loyiha — yangi tajriba
            </p>
          </div>
        </div>

        {/* Projects heading */}
        <div className="mb-8 mt-16 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
              TANLANGAN ISHLAR
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Barcha loyihalar
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {projectsData.length} ta loyiha
          </p>
        </div>

        {/* Projects grid */}
        {projectsData.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <article
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/90 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/5"
              >
                {/* Project cover */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#13263b] via-[#0d1829] to-[#101827]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl font-extrabold text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-400">
                    Project {index + 1}
                  </span>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Project information */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details link */}
                  <div className="mt-auto pt-7">
                    <Link
                      href={`/projects/${project.id}`}
                      aria-label={`${project.title} loyihasi haqida batafsil`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-sm font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#090D16]"
                    >
                      Batafsil ko'rish
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <p className="text-xl font-semibold">
              Hozircha loyihalar mavjud emas
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Yangi loyihalar tez orada shu yerda paydo bo'ladi.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            YANGI G'OYALAR
          </p>

          <h2 className="mt-5 text-2xl font-bold sm:text-4xl">
            Keyingi loyiha birgalikda bo'lsin!
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Qiziqarli loyiha yoki hamkorlik taklifingiz bormi?
            Men bilan bog'laning.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-[#090D16] transition hover:bg-cyan-300"
          >
            Bog'lanish
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
