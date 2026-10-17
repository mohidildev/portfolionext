import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-8 py-6 flex justify-between items-center bg-[#070d16]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/50">
      <div className="text-2xl font-bold tracking-wide">
        <span className="text-white">Port</span>
        <span className="text-cyan-400">folio</span>
      </div>

      <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
        <Link href="/skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
        <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
        <Link href="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
      </nav>

      <div>
        <a
          href="/resume.pdf"
          download
          className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg flex items-center gap-2"
        >
          Download CV <span>↓</span>
        </a>
      </div>
    </header>
  );
}