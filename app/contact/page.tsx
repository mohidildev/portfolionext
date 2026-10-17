"use client";

import { useState } from "react";


const contacts = [
  {
    icon: "@",
    title: "Email",
    value: "mohidil@example.com",
    href: "mailto:mohidil@example.com",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: "T",
    title: "Telegram",
    value: "@mohidil_dev",
    href: "https://t.me/mohidil_dev",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: "⌘",
    title: "Ish yo'nalishi",
    value: "Frontend Development",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject || "Portfolio orqali murojaat");
    const body = encodeURIComponent(
      `Ism: ${form.name}\nEmail: ${form.email}\n\nXabar:\n${form.message}`,
    );

    window.location.href = `mailto:mohidil@example.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090D16] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-[500px] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-[0.2em] text-cyan-400">
            CONTACT ME
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Men bilan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              bog'laning
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Savolingiz, loyihangiz yoki hamkorlik taklifingiz bormi?
            Siz bilan suhbatlashishdan mamnun bo'laman.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const content = (
              <div className="flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${contact.bg} ${contact.color} text-xl font-bold`}
                >
                  {contact.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">{contact.title}</p>
                  <p className="mt-1 break-words font-semibold text-gray-200">
                    {contact.value}
                  </p>
                </div>
              </div>
            );

            return contact.href ? (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("https") ? "_blank" : undefined}
                rel={contact.href.startsWith("https") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={contact.title}>{content}</div>
            );
          })}
        </div>

        {/* Form + information */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information */}
          <div className="rounded-3xl border border-white/10 bg-[#111827]/80 p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
              ALOQADA BO'LAYLIK
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-snug">
              Keling, g'oyangizni birgalikda amalga oshiramiz.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Web-sayt yaratish, mavjud loyihani takomillashtirish yoki
              yangi hamkorlik haqida yozishingiz mumkin.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Xabaringizni diqqat bilan ko'rib chiqaman",
                "Loyiha haqida fikr almashamiz",
                "Sizga mos yechimlarni muhokama qilamiz",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-400">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 sm:p-10"
          >
            <h2 className="text-2xl font-bold">Menga xabar yuboring</h2>

            <p className="mt-2 text-sm text-gray-400">
              Quyidagi maydonlarni to'ldiring.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Ismingiz
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="Ismingizni kiriting"
                  className="w-full rounded-xl border border-white/10 bg-[#090D16] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email manzilingiz
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-white/10 bg-[#090D16] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mavzu
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="Murojaat mavzusi"
                  className="w-full rounded-xl border border-white/10 bg-[#090D16] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Xabaringiz
                </label>
                <textarea
                  id="message"
                  required
                  minLength={10}
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="Loyihangiz yoki taklifingiz haqida yozing..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#090D16] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-[#090D16] transition hover:bg-cyan-300"
            >
              Email orqali yuborish
              <span>→</span>
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 text-sm leading-6 text-cyan-400"
              >
                Email dasturi ochilishi kerak. Xabarni yuborish uchun email
                dasturingizda yuborishni tasdiqlang.
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Tugmani bosganda qurilmangizdagi email dasturi ochiladi.
              Xabar avtomatik ravishda serverga yuborilmaydi.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
