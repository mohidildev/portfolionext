import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ko'nikmalarim | Mohidil Jahongirova",
  description:
    "Mohidil Jahongirovaning HTML, CSS, JavaScript, React, Next.js, TypeScript va boshqa web dasturlash ko'nikmalari.",
};

const skills = [
  {
    name: "HTML5",
    short: "H5",
    category: "Frontend",
    description: "Semantik va tartibli web-sahifalar yaratish.",
    level: 90,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    name: "CSS3",
    short: "C3",
    category: "Frontend",
    description: "Responsive dizayn va chiroyli interfeyslar.",
    level: 85,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "Tailwind CSS",
    short: "TW",
    category: "Styling",
    description: "Utility class yordamida tezkor UI yaratish.",
    level: 85,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    name: "JavaScript",
    short: "JS",
    category: "Programming",
    description: "Interaktiv va dinamik web-ilovalar yaratish.",
    level: 80,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    name: "TypeScript",
    short: "TS",
    category: "Programming",
    description: "Tiplar bilan ishonchli kod yozish.",
    level: 75,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "React.js",
    short: "Re",
    category: "Frontend",
    description: "Komponentlar asosida interfeyslar yaratish.",
    level: 80,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    name: "Next.js",
    short: "Nx",
    category: "Framework",
    description: "SSR, SSG va zamonaviy web-saytlar yaratish.",
    level: 70,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    name: "Git & GitHub",
    short: "Git",
    category: "Tools",
    description: "Kod versiyalarini boshqarish va loyihalarni saqlash.",
    level: 75,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090D16] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-96 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-[0.2em] text-cyan-400">
            MY SKILLS
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Mening{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ko'nikmalarim
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Zamonaviy web-texnologiyalar yordamida qulay, tezkor va chiroyli
            interfeyslar yarataman. Har kuni yangi bilimlarni o'rganib,
            ko'nikmalarimni rivojlantiraman.
          </p>
        </div>

        {/* Skills count */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-5 text-center">
            <p className="text-3xl font-bold text-cyan-400">08</p>
            <p className="mt-2 text-sm text-gray-400">Texnologiyalar</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-5 text-center">
            <p className="text-3xl font-bold text-cyan-400">04</p>
            <p className="mt-2 text-sm text-gray-400">Asosiy yo'nalishlar</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-5 text-center">
            <p className="text-3xl font-bold text-cyan-400">∞</p>
            <p className="mt-2 text-sm text-gray-400">O'rganish imkoniyati</p>
          </div>
        </div>

        {/* Skills cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-[#111827]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/5"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${skill.bg} ${skill.color} text-xl font-extrabold`}
                >
                  {skill.short}
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {skill.category}
                </span>
              </div>

              <h2 className="mt-6 text-xl font-bold transition group-hover:text-cyan-400">
                {skill.name}
              </h2>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                {skill.description}
              </p>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    O'zlashtirish darajasi
                  </span>

                  <span className="text-sm font-semibold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 text-xs text-gray-600">
                {String(index + 1).padStart(2, "0")} / 08
              </div>
            </article>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-10 text-center sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Har kuni yangi bilim, yangi imkoniyat!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Maqsadim — bilimlarimni amaliy loyihalarda qo'llash, tajriba
            orttirish va zamonaviy web-dasturchi sifatida rivojlanish.
          </p>
        </div>
      </section>
    </main>
  );
}
