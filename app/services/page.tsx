import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xizmatlarim | Mohidil Jahongirova",
  description:
    "Mohidil Jahongirova tomonidan Frontend dasturlash, responsive web dizayn, React va Next.js yordamida sayt yaratish xizmatlari.",
};

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Frontend dasturlash",
    description:
      "Zamonaviy HTML, CSS, JavaScript va React yordamida tezkor, interaktiv hamda foydalanuvchilar uchun qulay web-saytlar yarataman.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    icon: "UI",
    title: "Responsive web dizayn",
    description:
      "Saytlarni telefon, planshet va kompyuter ekranlariga moslab, barcha qurilmalarda chiroyli ko'rinishini ta'minlayman.",
    tags: ["Responsive", "Tailwind CSS", "CSS3"],
  },
  {
    number: "03",
    icon: "N",
    title: "Next.js saytlar",
    description:
      "Next.js yordamida zamonaviy sahifalar, dinamik routing va SEO uchun moslashtirilgan web-saytlar ishlab chiqaman.",
    tags: ["Next.js", "TypeScript", "SSR"],
  },
  {
    number: "04",
    icon: "✦",
    title: "UI dizaynni kodlash",
    description:
      "Figma dizaynlarini aniq o'lchamlar, ranglar va elementlar bilan ishlaydigan web-interfeysga aylantiraman.",
    tags: ["Figma", "Pixel Perfect", "React"],
  },
  {
    number: "05",
    icon: "SEO",
    title: "SEO optimizatsiya",
    description:
      "Sahifalarning metadata, title, description va semantik HTML tuzilishini qidiruv tizimlariga moslashtiraman.",
    tags: ["Metadata", "SEO", "Next.js"],
  },
  {
    number: "06",
    icon: "↗",
    title: "Saytni internetga joylash",
    description:
      "Tayyor loyihalarni GitHub orqali boshqarish va Vercel platformasiga deploy qilish jarayonida yordam beraman.",
    tags: ["Git", "GitHub", "Vercel"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090D16] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-[500px] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-[0.2em] text-cyan-400">
            MENING XIZMATLARIM
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Siz uchun{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              nimalar
            </span>{" "}
            qila olaman?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Zamonaviy texnologiyalar yordamida g'oyalaringizni sifatli,
            qulay va chiroyli web-loyihalarga aylantirishga yordam beraman.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "06+", label: "Xizmat yo'nalishlari" },
            { value: "100%", label: "Sifatga e'tibor" },
            { value: "24/7", label: "Yangi bilimlarni o'rganish" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-cyan-400">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/5"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/15" />

              <div className="relative flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-xl font-bold text-cyan-400">
                  {service.icon}
                </div>

                <span className="text-3xl font-bold text-white/10">
                  {service.number}
                </span>
              </div>

              <h2 className="relative mt-7 text-xl font-bold transition group-hover:text-cyan-400">
                {service.title}
              </h2>

              <p className="relative mt-4 min-h-24 text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition group-hover:border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 h-px w-full bg-white/10 transition group-hover:bg-cyan-400/40" />

              <p className="mt-5 text-sm font-medium text-cyan-400">
                Batafsil ma'lumot
                <span className="ml-2 inline-block transition group-hover:translate-x-2">
                  →
                </span>
              </p>
            </article>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-12 text-center sm:px-12">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
            KELING, BIRGA ISHLAYMIZ
          </span>

          <h2 className="mt-5 text-2xl font-bold sm:text-4xl">
            Loyihangiz uchun tayyormisiz?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            O'z g'oyangizni amalga oshirish uchun men bilan bog'laning.
            Loyihangiz haqida suhbatlashishdan mamnun bo'laman.
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
