import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12 min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 my-auto">
        {/* Surat va orqasidagi neon halqa */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0b131f]">
              <Image
                src="/images/mohidil-new.jpg" 
                alt="Mohidil Jahongirova"
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover object-[center_5%]" 
                priority
              />
            </div>
          </div>
        </div>

        {/* Matn qismi */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl text-gray-300 font-medium">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Mohidil Jahongirova
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">
            And I'm a <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">Frontend Developer</span>
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Zamonaviy, javob beruvchi (responsive) va yuqori unumdorlikka ega veb-saytlar hamda ilovalarni yaratishga ixtisoslashgan dasturchiman.
          </p>

          <div className="flex items-center space-x-4 pt-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-[#0b131f] font-bold px-6 py-3 rounded-md transition-all shadow-lg"
            >
              Hire Me
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-[#0b131f] font-bold px-6 py-3 rounded-md transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 mt-12 border-t border-gray-800 text-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">10+</h3>
          <p className="text-gray-400 text-sm mt-1">Years of experience</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">30+</h3>
          <p className="text-gray-400 text-sm mt-1">Projects completed</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">5+</h3>
          <p className="text-gray-400 text-sm mt-1">Technologies mastered</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">100+</h3>
          <p className="text-gray-400 text-sm mt-1">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
}