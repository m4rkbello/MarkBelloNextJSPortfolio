import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import FadeIn from "@/components/FadeIn";
// Notice Github is removed from this line:
import { ExternalLink, Terminal, Database, Layout, Code2 } from "lucide-react";
// And imported from react-icons here:
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-sky-500/30">
      {/* Background Orbs */}
      <div className="orb-1" />
      <div className="orb-2" />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center mt-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available for new projects</span>
            </div>
            
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
              <a href="#projects" className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
                Explore Work
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md font-semibold transition-colors flex items-center gap-2">
                {/* Updated Icon Here */}
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
          </FadeIn>
        </section>

        {/* ABOUT & SKILLS */}
        <section id="about" className="scroll-mt-32">
          <div className="grid md:grid-cols-5 gap-8">
            <FadeIn className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <GlassCard>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  With over 5 years of experience in web development, I bridge the gap between design and engineering. I specialize in React, Next.js, and Node.js ecosystems, focusing on performance, accessibility, and exceptional user interfaces.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  When I'm not writing code, I'm exploring modern design patterns, contributing to open-source, or experimenting with new technologies like WebGL and AI integrations.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
              <GlassCard className="h-full flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { icon: Layout, label: "Frontend", tech: "React, Next.js, Tailwind" },
                    { icon: Terminal, label: "Backend", tech: "Node.js, Python, REST" },
                    { icon: Database, label: "Database", tech: "PostgreSQL, MongoDB" }
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                        <skill.icon size={20} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{skill.label}</h4>
                        <p className="text-sm text-slate-400">{skill.tech}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
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
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">FinTech Dashboard {item}</h3>
                      <p className="text-slate-400 text-sm mb-4">A high-performance financial analytics dashboard handling real-time data streams.</p>
                    </div>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Tailwind"].map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <GlassCard className="space-y-8">
              {[
                { title: "Senior Frontend Engineer", company: "TechNova", time: "2021 - Present", desc: "Architected modern Next.js applications, improving Core Web Vitals by 40% across all client sites." },
                { title: "Full Stack Developer", company: "Creative Agency X", time: "2018 - 2021", desc: "Built interactive web experiences and headless CMS integrations for enterprise clients." }
              ].map((job, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10 last:pb-0 pb-8">
                  <div className="absolute w-3 h-3 bg-sky-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <span className="text-sm font-medium text-sky-400 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 mt-2 md:mt-0 inline-block">
                      {job.time}
                    </span>
                  </div>
                  <h4 className="text-slate-300 font-medium mb-4">{job.company}</h4>
                  <p className="text-slate-400 leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </GlassCard>
          </FadeIn>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 pb-32">
          <FadeIn>
            <GlassCard className="text-center py-20 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/20 blur-[100px] rounded-full" />
              <h2 className="text-4xl font-bold text-white mb-6">Let's work together.</h2>
              <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10">
                Currently looking for new opportunities. My inbox is always open whether you have a project in mind or just want to chat.
              </p>
              <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(56,189,248,0.3)]">
                Say Hello
              </a>
            </GlassCard>
          </FadeIn>
        </section>
        
      </div>
    </main>
  );
}