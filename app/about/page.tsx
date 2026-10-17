
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Men haqimda | Mohidil Jahongirova",
  description:
    "Mohidil Jahongirova — Frontend Developer. Tajribam, ko'nikmalarim va web dasturlashga bo'lgan qiziqishim haqida.",
};

export default function AboutPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  const stats = [
    { number: "10+", label: "Loyihalar" },
    { number: "8+", label: "Texnologiyalar" },
    { number: "100%", label: "O'rganishga ishtiyoq" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#090D16] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-96 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-widest text-cyan-400">
            MEN HAQIMDA
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Salom, men{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mohidil
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-gray-400 md:text-xl">
            Frontend Developer
          </p>
        </div>

        {/* About content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Profile card */}
          <div className="group relative mx-auto w-full max-w-md">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30 blur transition duration-500 group-hover:opacity-60" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111827] p-8 text-center shadow-2xl sm:p-12">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-6xl font-bold text-cyan-400 shadow-lg shadow-cyan-400/10">
                MJ
              </div>

              <h2 className="mt-7 text-2xl font-bold">
                Mohidil Jahongirova
              </h2>

              <p className="mt-2 text-gray-400">
                Web Developer
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">
                  React.js
                </span>
                <span className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">
                  Next.js
                </span>
                <span className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Men kimman?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-snug md:text-4xl">
              G'oyalarni zamonaviy{" "}
              <span className="text-cyan-400">web-saytlarga</span>{" "}
              aylantiraman.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Men Mohidil Jahongirova, web-dasturlashga qiziqadigan
              Frontend Developerman. Zamonaviy texnologiyalar yordamida
              qulay, tezkor va chiroyli foydalanuvchi interfeyslarini
              yaratishga intilaman.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Doim yangi bilimlarni o'rganaman, amaliy loyihalar ustida
              ishlayman va dasturlash ko'nikmalarimni rivojlantirib
              boraman. Maqsadim — foydalanuvchilar uchun foydali va
              sifatli mahsulotlar yaratish.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#090D16] transition hover:bg-cyan-300"
              >
                Loyihalarim →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <h3 className="text-4xl font-extrabold text-cyan-400">
                {item.number}
              </h3>
              <p className="mt-3 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
              TEXNOLOGIYALAR
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Mening ko'nikmalarim
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Loyihalar yaratishda foydalanadigan asosiy texnologiyalarim.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-[#111827] px-6 py-4 text-sm font-medium text-gray-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Birgalikda ajoyib loyiha yaratamizmi?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Yangi imkoniyatlar va qiziqarli loyihalar haqida suhbatlashishga
            doim tayyorman.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-[#090D16] transition hover:bg-cyan-300"
          >
            Men bilan bog'laning
          </Link>
        </div>
      </section>
    </main>
  );
}
