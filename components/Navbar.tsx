import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const links = ["About", "Projects", "Skills", "Experience"];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          Alex<span className="text-sky-400">.</span>
        </a>
        
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a href="#contact" className="hidden md:block px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}