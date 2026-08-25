import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import FadeIn from "@/components/FadeIn";
import { ExternalLink, Terminal, Database, Layout, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-sky-500/30">
      <div className="orb-1" />
      <div className="orb-2" />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center mt-10">
          <FadeIn>
            <Badge variant="outline" className="mb-8 py-1.5 px-4 bg-white/5 border-white/10 backdrop-blur-md gap-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available for new projects</span>
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Building digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                experiences.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              I'm a full-stack developer blending clean aesthetics with robust architecture to create modern web applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-bold px-8" asChild>
                <a href="#projects">Explore Work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 px-8 gap-2" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub size={18} />
                  GitHub
                </a>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <GlassCard key={item} className="group p-6">
                  <div className="h-64 rounded-xl bg-black/40 border border-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
                    <Code2 size={48} className="text-slate-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">FinTech Dashboard {item}</h3>
                      <p className="text-slate-400 text-sm">A high-performance financial analytics dashboard handling real-time data streams.</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full bg-white/5 hover:bg-white/10" asChild>
                      <a href="#"><ExternalLink size={18} /></a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Tailwind"].map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-sky-500/10 text-sky-300 hover:bg-sky-500/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </section>
        
      </div>
    </main>
  );
}