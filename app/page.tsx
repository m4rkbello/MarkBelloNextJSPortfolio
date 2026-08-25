import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import FadeIn from "@/components/FadeIn";
import { ExternalLink, Terminal, Database, Layout, Code2, Server, Smartphone, Activity, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-green-500/30 selection:text-green-200">
      {/* Background Orbs - Tuned for pure black/green aesthetic */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-green-500/10 blur-[120px] -z-10 animate-[float_20s_infinite_ease-in-out_alternate]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] -z-10 animate-[float_20s_infinite_ease-in-out_alternate_reverse]" />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[75vh] flex flex-col justify-center mt-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              {/* Profile Image from README */}
              <img 
                src="https://i.ibb.co/PsjwxPq4/m4rktriangle.png" 
                alt="Mark Bello" 
                className="w-16 h-16 rounded-full border-2 border-green-500/80 bg-green-500/10 p-1 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              />
              <Badge variant="outline" className="py-1.5 px-4 bg-white/5 border-green-500/30 backdrop-blur-md gap-2 rounded-full text-green-400 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                STATUS: ONLINE · MODE: FULL-STACK
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white">
              MARK BELLO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
                SYS.ARCHITECT
              </span>
            </h1>

            {/* Typing SVG from README */}
            <div className="mb-8 hidden md:block">
              <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=22C55E&center=false&vCenter=true&width=700&lines=You+don%27t+need+to+be+perfect.;You+just+need+to+be+better+than+yesterday.;React+%7C+Laravel+%7C+TypeScript" alt="Typing text" />
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-green-500/50 pl-6 font-mono text-sm md:text-base">
              <span className="text-green-400">`[SYS.INFO]`</span> // Architecting scalable web applications and mobile experiences with modern ecosystems. Driven by performance, clean code, and relentless optimization.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-bold px-8 bg-green-500 text-black hover:bg-green-400" asChild>
                <a href="#projects">Deployments</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/5 border-white/10 text-white backdrop-blur-md hover:bg-white/10 px-8 gap-2 hover:border-green-500/50 transition-colors" asChild>
                <a href="https://github.com/m4rkbello" target="_blank" rel="noreferrer">
                  <FaGithub size={18} className="text-green-400" />
                  github.com/m4rkbello
                </a>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS & ARCHITECTURE SECTION (From README) */}
        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl font-black mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-xl font-mono">`[01]`</span> CORE ARCHITECTURE
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Frontend & UI */}
              <GlassCard className="border-t-2 border-t-green-500/50 bg-black/40">
                <div className="flex items-center gap-3 mb-6">
                  <Layout className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Frontend Client</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React.js 19", "Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "DaisyUI", "Mantine"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border-white/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>

              {/* Backend & API */}
              <GlassCard className="border-t-2 border-t-green-500/50 bg-black/40">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Backend Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "PHP", "Node.js", "Express.js", "Bun.js", "RESTful APIs"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border-white/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>

              {/* Database & State */}
              <GlassCard className="border-t-2 border-t-green-500/50 bg-black/40">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Data & State</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Redux Toolkit", "Zustand", "TanStack Query"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border-white/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>

              {/* Mobile Development */}
              <GlassCard className="md:col-span-3 border-l-2 border-l-green-500/50 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-6 p-6">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Smartphone className="text-green-400" size={28} />
                  <div>
                    <h3 className="text-lg font-bold text-white">Mobile Interface Layer</h3>
                    <p className="text-sm text-gray-400 font-mono">React Native CLI · Expo</p>
                  </div>
                </div>
                <div className="w-full md:w-auto text-sm text-gray-400 font-mono text-left md:text-right">
                  deployment_targets: ["Vercel", "Render", "Hostinger"]
                </div>
              </GlassCard>

            </div>
          </FadeIn>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl font-black mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-xl font-mono">`[02]`</span> SELECTED PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Enterprise Web Platform", desc: "A full-stack application utilizing Laravel for robust API management and React/Next.js for a seamless frontend experience.", tech: ["Laravel", "React", "MySQL"] },
                { title: "Mobile Ecosystem App", desc: "Cross-platform mobile interface built with React Native Expo, featuring complex global state management with Redux Toolkit.", tech: ["React Native", "Redux", "Node.js"] }
              ].map((item, i) => (
                <GlassCard key={i} className="group p-6 bg-black/40 border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="h-48 rounded-xl bg-white/5 border border-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
                    <Code2 size={48} className="text-gray-700 group-hover:text-green-500 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full bg-white/5 text-white hover:bg-green-500/20 hover:text-green-400 ml-4 shrink-0" asChild>
                      <a href="#"><ExternalLink size={18} /></a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-green-500/10 text-green-400 border-transparent font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* GITHUB TELEMETRY SECTION (From README) */}
        <section id="telemetry" className="scroll-mt-32">
          <FadeIn>
            <h2 className="text-3xl font-black mb-12 text-white flex items-center gap-3">
              <span className="text-green-500 text-xl font-mono">`[03]`</span> GITHUB TELEMETRY
            </h2>
            <GlassCard className="bg-black/60 border-white/10 p-4 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <img src="https://github-readme-stats.vercel.app/api?username=m4rkbello&show_icons=true&include_all_commits=true&bg_color=000000&title_color=00FF00&text_color=ffffff&icon_color=00FF00&border_color=00FF0040&border_radius=10" alt="GitHub Stats" className="w-full object-cover rounded-lg" />
                <img src="https://streak-stats.demolab.com?user=m4rkbello&hide_border=false&background=000000&border=00FF0040&ring=00FF00&fire=00FF00&currStreakLabel=00FF00&currStreakNum=ffffff&sideNums=00FF00&sideLabels=ffffff&dates=ffffff&border_radius=10" alt="GitHub Streak" className="w-full object-cover rounded-lg" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <img src="https://github-readme-activity-graph.vercel.app/graph?username=m4rkbello&bg_color=000000&color=00FF00&line=00FF00&point=ffffff&area=true&area_color=00FF00&hide_border=true" alt="Activity Graph" className="w-full object-cover rounded-lg border border-green-500/20 bg-black" />
                <div className="p-4 rounded-lg border border-green-500/20 bg-black overflow-hidden flex justify-center">
                  <img src="https://ghchart.rshah.org/00FF00/m4rkbello" alt="Contributions" className="max-w-full opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 pb-32">
          <FadeIn>
            <GlassCard className="text-center py-20 relative overflow-hidden bg-black/80 border-green-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <Terminal size={48} className="mx-auto mb-6 text-green-500" />
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Initiate Connection.</h2>
              <p className="text-lg text-gray-400 max-w-lg mx-auto mb-10 font-mono text-sm">
                &gt; System ready for new opportunities.<br/>
                &gt; Inbox is open for collaboration and inquiries.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="rounded-full font-bold px-10 h-14 text-lg bg-green-500 text-black hover:bg-green-400 w-full sm:w-auto" asChild>
                  <a href="mailto:hello@example.com">
                    Execute.Mail()
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-bold px-10 h-14 text-lg border-white/20 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                  <a href="https://github.com/m4rkbello" target="_blank" rel="noreferrer">
                    Execute.GitHub()
                  </a>
                </Button>
              </div>
              
              <div className="mt-16 text-xs text-green-500/50 font-mono flex flex-col items-center gap-2">
                <p>╔═════════════════════════════════════════════════════╗</p>
                <p>║  STATUS: ONLINE   ·   MODE: FULL-STACK   ·   BUILD: PASSING  ║</p>
                <p>╚═════════════════════════════════════════════════════╝</p>
              </div>
            </GlassCard>
          </FadeIn>
        </section>
        
      </div>
    </main>
  );
}